// Aguarda carregamento da página
document.addEventListener("DOMContentLoaded", () => {

    // Botão voltar ao topo
    const btnTopo = document.createElement("button");
    btnTopo.id = "btnTopo";
    btnTopo.innerHTML = "⬆";
    document.body.appendChild(btnTopo);

    // Mostrar botão
    window.addEventListener("scroll", () => {

        if (window.scrollY > 300) {
            btnTopo.style.display = "block";
        } else {
            btnTopo.style.display = "none";
        }

        destacarMenu();
    });

    // Voltar ao topo
    btnTopo.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    // Animação dos cards
    const cards = document.querySelectorAll(".card");

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("mostrar");
            }

        });

    }, {
        threshold: 0.2
    });

    cards.forEach(card => observer.observe(card));

    // Destacar item do menu
    function destacarMenu() {

        const sections = document.querySelectorAll("section");
        const links = document.querySelectorAll("nav a");

        let atual = "";

        sections.forEach(section => {

            const topo = section.offsetTop - 200;
            const altura = section.offsetHeight;

            if (
                window.scrollY >= topo &&
                window.scrollY < topo + altura
            ) {
                atual = section.id;
            }

        });

        links.forEach(link => {

            link.classList.remove("ativo");

            if (link.getAttribute("href") === "#" + atual) {
                link.classList.add("ativo");
            }

        });
    }

});