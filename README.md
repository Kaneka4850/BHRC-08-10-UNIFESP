# Apresentação SAS

Este projeto contém a estrutura para a Apresentação SAS, focado na utilização de ferramentas modernas e robustas de análise e visualização de dados.

## Como baixar e executar o projeto

Siga o passo a passo abaixo para rodar o projeto localmente em sua máquina.

### Pré-requisitos

- [Git](https://git-scm.com/) (para clonar o repositório)
- [Docker](https://www.docker.com/) e [Docker Compose](https://docs.docker.com/compose/) (para rodar o ambiente sem precisar instalar as ferramentas de linguagem nativamente)

### Passo a passo

1. **Clone o repositório**
   ```bash
   git clone https://github.com/Kaneka4850/BHRC-08-10-UNIFESP.git
   cd BHRC-08-10-UNIFESP
   ```

2. **Construa e inicie os containers via Docker Compose**
   Na raiz do projeto (onde está o arquivo `docker-compose.yml`), execute o seguinte comando:
   ```bash
   docker-compose up -d --build
   ```
   *O parâmetro `-d` faz com que o container rode em segundo plano. O `--build` garante que a imagem mais atual seja gerada.*

3. **Acessando o ambiente Julia**
   Com o container em execução, você pode interagir com o ambiente do Julia através do comando:
   ```bash
   docker exec -it sas_app julia
   ```

4. **Encerrando o projeto**
   Quando não quiser mais rodar a aplicação, encerre os containers com:
   ```bash
   docker-compose down
   ```

---

## Tecnologias Utilizadas (Stacks)

As tecnologias escolhidas para este projeto visam entregar alta performance, reprodutibilidade e escalabilidade.

### <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" width="20" height="20" /> Docker & Docker Compose
Adotados para garantir a consistência do ambiente de desenvolvimento, isolar dependências e facilitar a implantação, eliminando problemas de divergência entre diferentes sistemas operacionais.

### <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="20" height="20" /> JavaScript & <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="20" height="20" /> React
Utilizados primariamente na construção da interface de usuário da apresentação. O React permite a componentização da interface, viabilizando uma apresentação dinâmica, interativa e fluida. O JavaScript é responsável por ditar o comportamento e a lógica no lado do cliente.

### <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" width="20" height="20" /> Node.js
Aplicado no ecossistema de desenvolvimento do frontend e processamento de rotinas backend. O Node.js oferece uma arquitetura assíncrona orientada a eventos que é altamente eficiente e ideal para aplicações modernas e de alta escalabilidade.

### <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" width="20" height="20" /> Python
Empregado na estruturação, automação, e pré-processamento de dados brutos. Python foi selecionado devido à sua imensa versatilidade, enorme ecossistema de ferramentas de data science e facilidade de integração em pipelines de tratamento de dados.

### <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/julia/julia-original.svg" width="20" height="20" /> Julia
Linguagem de programação central escolhida para rotinas estatísticas pesadas, modelagem matemática avançada e análise científica.

---

## Por que Julia e não R?

Para o processamento de dados e análise estatística, optamos pela adoção do **Julia** em detrimento do **R**. A justificativa central se baseia nos seguintes pilares que tornam o Julia uma linguagem estatística e matemática superior para fluxos de trabalho modernos:

1. **Performance e Velocidade (O Problema das Duas Linguagens)**
   No ecossistema R, para obter alta performance computacional, é frequente a necessidade de escrever pacotes e funções em C ou C++ (através de Rcpp, por exemplo). O Julia resolve esse problema ao ser projetado para ser tão fácil de escrever quanto o R ou Python, mas com um desempenho comparável ao de linguagens compiladas, graças à sua compilação JIT (Just-In-Time) através da LLVM.
   
2. **Despacho Múltiplo (Multiple Dispatch)**
   A arquitetura base do Julia utiliza o Despacho Múltiplo, o que a torna extensível e voltada à matemática natural. O código matemático e estatístico escrito em Julia aproxima-se muito mais de equações matemáticas puras, tornando-se conciso e composável, superando sistemas de orientação a objetos muitas vezes engessados para matemática.

3. **Paralelismo e Concorrência Nativos**
   Diferente do R, que historicamente lida com processamento single-thread com soluções de contorno para atingir o paralelismo, o Julia foi construído nativamente pensando na era de múltiplos núcleos e computação distribuída, oferecendo suporte robusto para concorrência (threads) e computação assíncrona.

4. **Gerenciamento de Pacotes e Reprodutibilidade**
   O ecossistema Pkg do Julia garante controle exato das versões utilizadas. Ele permite o isolamento da dependência de forma embutida e altamente reproduzível, superando dificuldades crônicas de gerenciamento de dependências frequentemente encontradas no R.

**Saiba mais e apoie o projeto Julia**:
Você pode conferir o código-fonte aberto, contribuir ou estudar a linguagem acessando o [Repositório Oficial do Julia no GitHub](https://github.com/JuliaLang/julia).

---

## Variantes Raras em Transtorno do Espectro Autista (TEA)

O Transtorno do Espectro Autista (TEA) possui uma arquitetura genética altamente complexa e heterogênea. Enquanto as variantes genéticas comuns de pequeno efeito (poligênicas) contribuem consideravelmente para a herdabilidade populacional do autismo, o avanço tecnológico em Sequenciamento de Nova Geração (NGS) revelou a enorme relevância clínica e molecular das **variantes raras**.

As variantes raras compreendem mutações com frequência alélica extremamente baixa (geralmente inferior a 1% na população). Podem incluir Variantes de Número de Cópias (CNVs), mutações pontuais (SNVs) e pequenas inserções ou deleções (Indels), muitas vezes de caráter *de novo* (não herdadas dos pais, mas presentes no indivíduo afetado).

Diferentemente das variantes comuns, as variantes raras frequentemente exercem um **alto impacto fenotípico**. Elas costumam afetar ou truncar de forma drástica genes críticos para o neurodesenvolvimento, influenciando vias biológicas essenciais como a sinalização sináptica, a plasticidade neuronal e a remodelação da cromatina celular. 

O estudo sistemático e o foco clínico nessas variantes raras em TEA têm sido fundamentais para:
- Mapear novos genes de risco e desvendar o mecanismo patológico da desordem neurobiológica subjacente.
- Fornecer diagnósticos moleculares mais precisos e aconselhamento genético avançado para famílias.
- Subclassificar o TEA com base na biologia, abrindo caminhos tangíveis para futuras estratégias de medicina personalizada e tratamentos direcionados.
