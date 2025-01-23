<template>
    <nav>
        <div class="header-container">
            <div class="header-logo">
                <img src="/logsynclogo.jpeg" alt="Logo Icon">
            </div>
            <div class="header-menu" :class="{ 'menu-active': isMenuActive }">
                <button>About</button>
                <button>Contact</button>
                <button>Documentation</button>
                <button>Get Started</button>
                <select class="language-dropdown" @change="handleLanguageChange">
                    <option value="en">English</option>
                    <option value="pt">Português</option>
                    <option value="es">Español</option>
                </select>
            </div>
            <div class="hamburger-menu" @click="toggleMenu">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { ref } from 'vue';

const isMenuActive = ref(false);


const toggleMenu = () => {
    isMenuActive.value = !isMenuActive.value;
};


const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    console.log("Idioma selecionado:", selectedLanguage);
}
</script>

<style scoped>
.header-container {
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background-color: #f8f8f8;
    position: relative;
    z-index: 5;
}

.header-logo {
    display: flex;
    align-items: center;
    gap: 10px;
}

.header-logo img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
}

.header-menu {
    display: flex;
    gap: 30px;
    align-items: center;
    position: relative;
    z-index: 8;
}

.header-menu button {
    background-color: transparent;
    color: #333;
    font-weight: bold;
    border: none;
    padding: 10px 20px;
    border-radius: 7px;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;
}

.header-menu button:hover {
    transform: scale(1.1);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    border: 2px solid #FFA500;
}

.header-menu button:nth-child(4) {
    background-color: #ffa500;

    color: #333;
    border-radius: 5px;

    transition: all 0.3s ease;

    position: relative;
}

.header-menu button:nth-child(4):hover {
    background-color: #e67e22;

    color: #333;

    transform: scale(1.1);

    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.3);

    border-color: #e67e22;
}


.header-menu button:nth-child(4):hover:before {
    opacity: 1;
    transform: scale(1.2);
}

.header-menu button:nth-child(4):active {
    transform: scale(0.98);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
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

.hamburger-menu {
    display: none;
    flex-direction: column;
    gap: 5px;
    cursor: pointer;
}

.hamburger-menu .bar {
    width: 25px;
    height: 3px;
    background-color: #333;
    border-radius: 5px;
}

@media (max-width: 768px) {
    .header-menu {
        display: none;
        flex-direction: column;
        gap: 20px;
        position: absolute;
        top: 100px;
        left: 50%;
        transform: translateX(-50%);
        width: 90%;
        background-color: #f8f8f8;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    }

    .header-menu button {
        width: 90%;
    }

    .header-menu.menu-active {
        display: flex;
    }

    .hamburger-menu {
        display: flex;
    }
}

@media (max-width: 480px) {
    .header-logo {
        margin-bottom: 15px;
    }

    .header-logo img {
        width: 50px;
        height: 50px;
    }

    .header-menu {
        width: 100%;
        background-color: #f8f8f8;
        position: absolute;
        top: 60px;
        left: 50%;
        transform: translateX(-50%);
        border-radius: 10px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        padding: 10px;
    }

    .header-menu button {
        width: 100%;
        padding: 15px;
        font-size: 1.1rem;
    }

    .header-menu.menu-active {
        display: flex;
        flex-direction: column;
    }

    .hamburger-menu {
        display: flex;
        flex-direction: column;
        gap: 5px;
    }
}
</style>
