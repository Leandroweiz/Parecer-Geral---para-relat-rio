let alunos = [];

function processarAlunos() {
    let alunosText = document.getElementById("alunosLista").value.trim();
    let formularioDiv = document.getElementById("formulario");
    let botaoParecer = document.getElementById("btnParecer");

    if (!alunosText) {
        alert("Cole a lista de alunos!");
        return;
    }

    alunos = alunosText.split("\n").map(aluno => aluno.trim()).filter(aluno => aluno !== "");
    formularioDiv.innerHTML = "";
    
    alunos.forEach((aluno, index) => {
        formularioDiv.innerHTML += `
            <div class="aluno-card">
                <h4>${aluno}</h4>
                <label>Realiza as atividades?</label>
                <select id="realiza-${index}">
                    <option value="sim">Sim</option>
                    <option value="não">Não</option>
                </select>

                <label>Tem facilidade?</label>
                <select id="facilidade-${index}">
                    <option value="sim">Sim</option>
                    <option value="não">Não</option>
                </select>

                <label>Demonstra conhecimento?</label>
                <select id="conhecimento-${index}">
                    <option value="sim">Sim</option>
                    <option value="não">Não</option>
                </select>
            </div>
        `;
    });

    botaoParecer.style.display = "block";
}

function gerarParecer() {
    let resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = "";

    alunos.forEach((aluno, index) => {
        let realiza = document.getElementById(`realiza-${index}`).value;
        let facilidade = document.getElementById(`facilidade-${index}`).value;
        let conhecimento = document.getElementById(`conhecimento-${index}`).value;

        let parecer = gerarParecerAluno(realiza, facilidade, conhecimento);
        resultadoDiv.innerHTML += `<p><strong>${aluno}:</strong> ${parecer}</p>`;
    });
}

function gerarParecerAluno(realiza, facilidade, conhecimento) {
    let inicio = [
        "Tem dedicação e interesse pelo aprendizado.",
        "Participa ativamente das atividades propostas.",
        "Mantém um bom ritmo de aprendizagem.",
        "Acompanha, realiza todas as atividades.",
        "Apresenta disposição para aprender.",
        "Se envolve nas atividades com entusiasmo.",
        "Realiza todas as atividades.",
        "Acompanha, teve evolução no aprendizado.",
        "Realiza as tarefas, acompanha.",
        "Acompanha, realiza as atividades.",
        "Participa das atividades com interesse.",
        "Acompanha, se esforça.",
        "Acompanha, demonstra autonomia."
    ];

    let finalPositivo = [
        "Participativa e contribui com suas ideias.",
        "Demonstra interesse nos conteúdos abordados.",
        "Apresenta progresso em seu desempenho.",
        "Desenvolveu e apresentou progresso durante as aulas.",
        "Procura aprender e colaborar nas aulas.",
        "Demonstrou evolução durante as aulas.",
        "Entendeu os conceitos ensinados.",
        "Contribuiu para o aprendizado dos conteúdos.",
        "Apresenta progresso."

    ];

    let finalNegativo = [
        "Precisa melhorar sua participação e dedicação.",
        "Enfrenta dificuldades, mas pode melhorar com esforço.",
        "Entendeu parcialmente o conteúdo, precisando de mais pratica.",
        "Com mais estudo, irá vencer as dificuldades.",
        "Com dedicação e prática, vai vencer as dificuldades.",
        "Com apoio e incentivo, pode melhorar seu desempenho.",
        "Mesmo com dificuldades se apropriou parcialmente do conteúdo."
    ];

    let totalSim = [realiza, facilidade, conhecimento].filter(res => res === "sim").length;
    let inicioEscolhido = inicio[Math.floor(Math.random() * inicio.length)];
    let finalEscolhido = totalSim >= 2 
        ? finalPositivo[Math.floor(Math.random() * finalPositivo.length)] 
        : finalNegativo[Math.floor(Math.random() * finalNegativo.length)];
    
    return `${inicioEscolhido} ${finalEscolhido}`;
}
