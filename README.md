# 🧪 Atomic Design

**Atomic Design** é uma metodologia de design de interfaces proposta por Brad Frost, que organiza os componentes da interface de forma hierárquica e reutilizável, inspirada na estrutura dos elementos químicos.

A ideia principal é que interfaces sejam construídas com base em **blocos menores e reutilizáveis**, que se combinam em componentes maiores e mais complexos.

---

## 📐 Estrutura do Atomic Design

A metodologia é dividida em 5 níveis:

### 1. **Atoms (Átomos)**
- Os blocos mais básicos da interface.
- Exemplos: `Button`, `Input`, `Label`, `Checkbox`, `Icon`.

### 2. **Molecules (Moléculas)**
- Combinações simples de átomos que formam uma unidade funcional.
- Exemplos: Um campo de formulário (`Label + Input + ErrorMessage`), `SearchBar`.

### 3. **Organisms (Organismos)**
- Grupos de moléculas e/ou átomos que formam seções independentes da interface.
- Exemplos: `Navbar`, `TodoList`, `Form`.

### 4. **Templates**
- Estruturas de layout compostas por múltiplos organismos.
- Determinam o posicionamento dos elementos na página.
- Exemplo: Página com `Header`, `Sidebar`, `MainContent`.

### 5. **Pages**
- Instâncias reais de templates com dados específicos.
- Representam a interface final que o usuário vê.
- Exemplo: Página "Home" com lista de tarefas carregadas.

---

## ✅ Benefícios do Atomic Design

- **Reutilização de componentes**;
- **Facilidade de manutenção** e escalabilidade;
- **Organização clara** da estrutura do projeto;
- **Colaboração eficiente** entre design e desenvolvimento.

---
