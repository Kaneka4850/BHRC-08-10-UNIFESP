# Apresentação SAS

Este projeto contém a estrutura para a Apresentação SAS, focado na utilização de ferramentas modernas e robustas de análise e visualização de dados.

## 🚀 Como baixar e executar o projeto

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

## 🛠️ Tecnologias Utilizadas (Stacks)

As tecnologias escolhidas para este projeto visam entregar alta performance, reprodutibilidade e escalabilidade.

- **Docker & Docker Compose**: Adotados para garantir a consistência do ambiente de desenvolvimento (evitando o famoso "na minha máquina funciona").
- **React (Frontend)**: Utilizado para gerenciar a interface de usuário da apresentação (seções gráficas e interatividade), garantindo componentização e uma ótima experiência ao usuário.
- **Julia**: Linguagem de programação central para as rotinas estatísticas e de modelagem matemática.

---

## 📊 Por que Julia e não R?

Para o processamento de dados e análise estatística, optamos pela adoção do **Julia** em detrimento do **R**. A justificativa central se baseia nos seguintes pilares que tornam o Julia uma linguagem estatística e matemática muito superior para fluxos de trabalho modernos:

1. **Performance e Velocidade (O Problema das Duas Linguagens)**
   No ecossistema R, para obter alta performance computacional, é frequente a necessidade de escrever pacotes e funções em C ou C++ (através de Rcpp, por exemplo). O Julia resolve esse problema ao ser projetado para ser tão fácil de escrever quanto o R ou Python, mas com um desempenho comparável ao de linguagens compiladas como C e Fortran, graças à sua compilação JIT (Just-In-Time) usando LLVM.
   
2. **Despacho Múltiplo (Multiple Dispatch)**
   A arquitetura base do Julia utiliza o Despacho Múltiplo, o que a torna incrivelmente extensível e voltada à matemática natural. O código matemático e estatístico escrito em Julia aproxima-se muito mais de equações matemáticas puras, tornando-se mais conciso, limpo e composável em relação aos sistemas de orientação a objetos adaptados no R (S3, S4).

3. **Paralelismo e Concorrência Nativos**
   Diferente do R, que historicamente lida com processamento single-thread com _workarounds_ para paralelismo, o Julia foi construído do zero pensando na era moderna de multi-core e computação em nuvem, oferecendo suporte robusto, fácil e nativo para concorrência (threads e programação assíncrona) e computação distribuída.

4. **Gerenciamento de Pacotes e Reprodutibilidade**
   O ecossistema Pkg do Julia garante controle exato das versões utilizadas, permitindo o isolamento da dependência por projeto de forma embutida e altamente reproduzível, superando as tradicionais dificuldades de gerenciamento de dependências encontradas no R.

🔗 **Saiba mais e apoie o projeto Julia**:
Você pode conferir o código-fonte aberto, contribuir ou estudar a linguagem acessando o [Repositório Oficial do Julia no GitHub](https://github.com/JuliaLang/julia).

---

## ⚠️ Regras do Repositório
Conforme configurado no nosso `.gitignore`, **é expressamente proibido commitar arquivos `.pdf` e `.pptx`** neste repositório. O objetivo é manter o repositório leve, ágil para clone/fetch e versionar apenas código fonte.
