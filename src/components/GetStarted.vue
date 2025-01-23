<template>
    <header>
        <div class="get-started-container">
            <div class="get-started-title">
                <h1>LogSync</h1>
                <p>A real-time Rust-based log monitoring tool for quick error detection and resolution.</p>
            </div>
            <div class="get-started-menu">
                <button class="get-started-button">Get Started</button>
            </div>
        </div>
    </header>
</template>

<script setup>
const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    console.log("Idioma selecionado:", selectedLanguage);

}
</script>

<style scoped>
.get-started-container {
    height: 300px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 20px;
    background-color: #f8f8f8;
    margin-bottom: 50px;
    gap: 50px;
}

.get-started-title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
}

.get-started-title h1 {
    font-family: 'Poppins', sans-serif;
    font-size: 5rem;
    font-weight: 900;
    color: #333;
    letter-spacing: 2px;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
}

.get-started-title p {
    font-family: 'Poppins', sans-serif;
    font-size: 1.4rem;
    line-height: 1.6;
    font-weight: 300;
    max-width: 550px;
    margin: 0 auto;
}

.get-started-menu {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
}

.get-started-menu .get-started-button {
    background-color: #ffa500;
    color: #333;
    font-weight: bold;
    border: none;
    padding: 30px 100px;
    border-radius: 5px;
    font-size: 1.5rem;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
}

.get-started-menu .get-started-button:hover {
    background-color: #e67e22;
    transform: scale(1.1);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
}

.get-started-menu .get-started-button:hover:before {
    opacity: 1;
    transform: scale(1.2);
}

.get-started-menu .get-started-button:active {
    transform: scale(0.98);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
}

.documentation-link {
    color: #3498db;
    font-size: 1.5rem;
    text-decoration: underline;
    font-weight: 500;
    transition: color 0.3s ease;
}

.documentation-link:hover {
    color: #e67e22;
}

.language-dropdown {
    background-color: transparent;
    color: #333;
    border: none;
    padding: 10px 30px;
    cursor: pointer;
    font-size: 1rem;
    transition: all 0.3s ease;
    height: 40px;
}

.language-dropdown:focus {
    outline: none;
    border-color: #FF5C00;
}

.language-dropdown option {
    color: #000;
}

/* Responsividade */
@media (max-width: 768px) {
    .get-started-container {
        flex-direction: column;
        height: auto;
        text-align: center;
    }

    .get-started-title h1 {
        font-size: 3rem;
    }

    .get-started-title p {
        font-size: 1.2rem;
        max-width: 90%;
    }

    .get-started-menu .get-started-button {
        padding: 20px 50px;
        font-size: 1.2rem;
    }
}

@media (max-width: 480px) {
    .get-started-title h1 {
        font-size: 2.5rem;
    }

    .get-started-title p {
        font-size: 1rem;
        max-width: 100%;
    }

    .get-started-menu .get-started-button {
        padding: 15px 40px;
        font-size: 1rem;
    }
}
</style>
