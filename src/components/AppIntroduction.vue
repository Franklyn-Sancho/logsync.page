<template>
    <div class="app-introduction">
        <div class="intro-content">
            <h2>Enhance Your Monitoring with the Power of Rust</h2>
            <div class="content-block">
                <div class="text">
                    <p>
                        Our application has been built with the performance and security that only
                        <strong>Rust</strong>
                        can offer. Designed to provide a robust and efficient experience, it ensures the
                        <strong>quick</strong>
                        and reliable detection of <strong>critical and fatal errors</strong> without compromising data
                        integrity.
                    </p>
                </div>
            </div>
            <div class="content-block">
                <div class="text">
                    <p>
                        The goal behind this tool is to provide the peace of mind of precise log monitoring, which
                        not only
                        identifies issues but also takes <strong>immediate action</strong>, sending real-time reports to
                        your
                        <strong>Google Drive</strong> and <strong>Telegram</strong>.
                    </p>
                </div>
            </div>
            <div class="content-block">
                <div class="text">
                    <p>
                        Whether you're a <strong>developer</strong>, <strong>system administrator</strong>, or any
                        professional
                        who relies on real-time data, our application has been created to give you full control, with
                        the
                        guarantee of <strong>security</strong>, <strong>reliability</strong>, and superior
                        <strong>performance</strong>.
                    </p>
                </div>
            </div>
            <div class="content-block">
                <div class="text">
                    <p>
                        With <strong>Rust integration</strong>, every second of processing is optimized, and you can
                        trust that your
                        information is in good hands.
                    </p>
                </div>
            </div>
            <div class="cta-button">
                <button @click="goToSignup">Try Now</button>
            </div>
        </div>
    </div>
</template>

<script setup>
// Logic to handle CTA button
const goToSignup = () => {
    window.location.href = '/signup'; // Or any action you prefer
};
</script>

<style scoped>
.app-introduction {
    padding: 60px 40px;
    color: #e0e0e0;
    max-width: 1200px;
    margin: 0 auto;
    font-family: 'Poppins', sans-serif;
}

.app-introduction h2 {
    font-size: 3rem;
    font-weight: 900;
    color: #333;
    letter-spacing: 2px;
    margin-bottom: 30px;
    text-transform: uppercase;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
}

.content-block {
    margin-bottom: 30px;
    transition: transform 0.5s ease-in-out;
}

.text {
    max-width: 900px;
}

.text p {
    font-size: 1.2rem;
    line-height: 1.8;
    margin-bottom: 20px;
    color: #333;
    text-align: justify;
}

.text p strong {
    color: #FFA500;
    font-weight: 700;
}

.text p em {
    font-style: italic;
}

.cta-button {
    text-align: center;
    margin-top: 40px;
}

.cta-button button {
    padding: 12px 24px;
    background-color: #FFA500;
    color: #fff;
    border: none;
    font-size: 1.1rem;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.cta-button button:hover {
    background-color: #e07b00;
}

@media (max-width: 1024px) {
    .app-introduction {
        padding: 40px 20px;
    }

    .app-introduction h2 {
        font-size: 2.5rem;
    }

    .text p {
        font-size: 1.1rem;
    }

    .cta-button button {
        font-size: 1rem;
    }
}

@media (max-width: 768px) {
    .app-introduction {
        padding: 30px 15px;
    }

    .app-introduction h2 {
        font-size: 2rem;
    }

    .text p {
        font-size: 1rem;
    }

    .cta-button button {
        font-size: 1rem;
        padding: 10px 20px;
    }
}

@media (max-width: 480px) {
    .app-introduction {
        padding: 20px 10px;
    }

    .app-introduction h2 {
        font-size: 1.5rem;
    }

    .text p {
        font-size: 0.9rem;
        max-width: 300px;
    }

    .cta-button button {
        font-size: 0.9rem;
        padding: 8px 16px;
    }
}

.content-block:hover {
    transform: translateY(-10px);
}
</style>
