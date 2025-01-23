<template>
    <div class="slider-container">
        <!-- Slide 1: Speed -->
        <div class="slide" :class="{ 'active': currentIndex === 0 }">
            <i class="fa-solid fa-lightbulb icon"></i>
            <h2>Very Fast</h2>
            <p>Quickly identify and resolve errors in real-time with ultra-fast processing powered by Rust.</p>
        </div>

        <!-- Slide 2: Rust Power -->
        <div class="slide" :class="{ 'active': currentIndex === 1 }">
            <i class="fa-brands fa-rust icon"></i>
            <h2>The Power of Rust</h2>
            <p>Leverage Rust’s memory safety and performance to achieve optimal error resolution and system efficiency.
            </p>
        </div>

        <!-- Slide 3: Cloud Integration -->
        <div class="slide" :class="{ 'active': currentIndex === 2 }">
            <i class="fa-brands fa-google icon"></i>
            <h2>Cloud Integration with Google Drive</h2>
            <p>Send error reports directly to Google Drive for easy, secure access from anywhere.</p>
        </div>

        <!-- Slide 4: Telegram Integration -->
        <div class="slide" :class="{ 'active': currentIndex === 3 }">
            <i class="fa-brands fa-telegram icon"></i>
            <h2>Telegram Integration</h2>
            <p>Instantly send error reports to Telegram and get real-time notifications.</p>
        </div>

        <!-- Slide 5: Reliability -->
        <div class="slide" :class="{ 'active': currentIndex === 4 }">
            <i class="fa-solid fa-shield icon"></i>
            <h2>Reliability</h2>
            <p>Keep your data secure and synchronized, reducing the risk of inconsistencies.</p>
        </div>

        <!-- Slide Navigation -->
        <div class="slider-nav">
            <button @click="prevSlide" class="arrow left">&lt;</button>
            <button @click="nextSlide" class="arrow right">&gt;</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            currentIndex: 0,
            slides: [
                "Very Fast. Quickly identify and resolve errors in real-time.",
                "The Power of Rust. Leverage Rust’s memory safety and performance.",
                "Cloud Integration. Automatically send detailed reports to Telegram and store them securely in the cloud.",
                "Reliability. Keep your data secure and synchronized."
            ]
        };
    },
    methods: {
        nextSlide() {
            this.currentIndex = (this.currentIndex + 1) % this.slides.length;
        },
        prevSlide() {
            this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
        }
    },
    mounted() {
        setInterval(this.nextSlide, 5000);  // Changes automatically every 5 seconds
    }
};
</script>

<style scoped>
.slider-container {
    position: relative;
    width: 100%;
    height: 600px;
    overflow: hidden;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
    background: #121212;
}

.slide {
    opacity: 0;
    visibility: hidden;
    text-align: center;
    transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
}

.slide.active {
    display: flex;
    opacity: 1;
    visibility: visible;
    transform: translateX(0);
}

.icon {
    font-size: 6rem;
    color: #ffa500;
    margin-bottom: 1rem;
}

h2 {
    font-size: 2.5rem;
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    color: #f0f0f0;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
}

p {
    font-size: 1.2rem;
    font-family: 'Poppins', sans-serif;
    color: #f0f0f0;
    font-weight: 200;
    margin-top: 1rem;
    line-height: 1.6;
    text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
}

.slider-nav {
    position: absolute;
    top: 50%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    transform: translateY(-50%);
}

.arrow {
    background: none;
    border: none;
    font-size: 3rem;
    color: #ffa500;
    cursor: pointer;
    transition: color 0.3s ease;
}

.arrow:hover {
    color: #ff7e5f;
}


@media (max-width: 768px) {
    .slider-container {
        height: 450px;
    }

    .icon {
        font-size: 4rem;
    }

    h2 {
        font-size: 2rem;
    }

    p {
        font-size: 1rem;
    }

    .slider-nav {
        top: 45%;
    }

    .arrow {
        font-size: 2.5rem;
    }
}

@media (max-width: 480px) {
    .slider-container {
        height: 350px;
    }

    .icon {
        font-size: 3rem;
    }

    h2 {
        font-size: 1.5rem;
    }

    p {
        font-size: 0.9rem;
    }

    .slider-nav {
        top: 40%;
    }

    .arrow {
        font-size: 2rem;
    }
}
</style>
