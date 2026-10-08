# ==============================================================================
# Script para geração da Curva ROC e cálculo de AUC para a Escala SAS
# Requisito: Julia 1.6+
# Pacotes: Plots, ROCAnalysis (ou MLBase para métricas)
# ==============================================================================

using Pkg
# Certifique-se de que os pacotes necessários estão instalados
# Pkg.add("Plots")
# Pkg.add("Distributions")

using Plots
using Distributions
using Random

# Configuração estética (Padrão artigo científico)
theme(:default)
default(
    fontfamily = "Computer Modern",
    linewidth = 2,
    grid = false,
    framestyle = :box,
    legend = :bottomright
)

# Simulando os scores da Escala SAS para dois grupos:
# 1. População neurotípica (Controles)
# 2. Indivíduos no Espectro Autista (TEA)
Random.seed!(42)
n_samples = 1000

# Scores simulados (Quanto menor o score na SAS, maior a inaptidão social)
# Para fins de modelagem da curva ROC clássica (onde valores maiores = evento), 
# inverteremos a lógica analítica para o score de Risco = max_score - SAS_score
scores_controle = rand(Normal(25.0, 5.0), n_samples)
scores_tea = rand(Normal(15.0, 5.0), n_samples)

# Função auxiliar empírica para gerar a curva ROC
function calculate_roc_curve(controls, cases; thresholds=100)
    min_val = min(minimum(controls), minimum(cases))
    max_val = max(maximum(controls), maximum(cases))
    
    thresholds_arr = range(min_val, max_val, length=thresholds)
    
    tpr = Float64[] # True Positive Rate (Sensitivity)
    fpr = Float64[] # False Positive Rate (1 - Specificity)
    
    # Classificamos como "Caso" se score <= threshold
    for t in thresholds_arr
        # TPR = Casos corretamente identificados / Total de Casos
        tp = sum(cases .<= t)
        fn = sum(cases .> t)
        push!(tpr, tp / (tp + fn))
        
        # FPR = Controles incorretamente identificados / Total de Controles
        fp = sum(controls .<= t)
        tn = sum(controls .> t)
        push!(fpr, fp / (fp + tn))
    end
    
    return fpr, tpr
end

# Calculando TPR e FPR
fpr, tpr = calculate_roc_curve(scores_controle, scores_tea)

# Ordenando para plotagem limpa (FPR crescente)
perm = sortperm(fpr)
fpr_sorted = fpr[perm]
tpr_sorted = tpr[perm]

# Adicionando pontos (0,0) e (1,1) para ancorar a curva
pushfirst!(fpr_sorted, 0.0); pushfirst!(tpr_sorted, 0.0)
push!(fpr_sorted, 1.0); push!(tpr_sorted, 1.0)

# Aproximação da Área sob a Curva (AUC) via integração trapezoidal
auc_value = sum((fpr_sorted[2:end] .- fpr_sorted[1:end-1]) .* (tpr_sorted[1:end-1] .+ tpr_sorted[2:end])) / 2
auc_rounded = round(auc_value, digits=2)

# ==============================================================================
# Plotagem da Curva ROC
# ==============================================================================

# Criação da figura com dimensões quadradas
roc_plot = plot(
    aspect_ratio = 1.0,
    xlims = (0, 1),
    ylims = (0, 1),
    xlabel = "1 - Specificity (FPR)",
    ylabel = "Sensitivity (TPR)",
    title = "Desempenho Discriminativo da Escala SAS",
    titlefontsize = 12,
    guidefontsize = 10,
    tickfontsize = 8,
    dpi = 300
)

# Área preenchida sob a curva
plot!(
    roc_plot,
    fpr_sorted, tpr_sorted,
    fillrange = 0,
    fillalpha = 0.2,
    fillcolor = RGB(156/255, 195/255, 228/255), # Azul claro do tema
    linecolor = :transparent,
    label = false
)

# Linha da curva ROC
plot!(
    roc_plot,
    fpr_sorted, tpr_sorted,
    color = RGB(31/255, 78/255, 121/255), # Azul escuro do tema (#1F4E79)
    linewidth = 2.5,
    label = "Curva ROC (SAS)\nAUC = $auc_rounded"
)

# Linha do classificador aleatório (Diagonal)
plot!(
    roc_plot,
    [0, 1], [0, 1],
    linestyle = :dash,
    color = :gray,
    linewidth = 1.5,
    label = "Classificador Aleatório (AUC = 0.50)"
)

# Salvando a imagem
# mkpath("saida") # Cria o diretório de saída caso não exista
savefig(roc_plot, "curva_roc_sas.svg")
savefig(roc_plot, "curva_roc_sas.png")

println("Gráfico gerado com sucesso! AUC estimado: $auc_rounded")
