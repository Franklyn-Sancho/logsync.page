<template>
    <div class="features-overview">
        <div class="features-content">
            <h2>How It Works</h2>
            <div class="steps-container">
                <div class="step" v-for="(step, index) in steps" :key="index" ref="steps"
                    :class="{ 'step-visible': isVisible(index) }">
                    <div class="step-header">
                        <h3>{{ step.title }}</h3>
                        <i :class="step.iconClass"></i>
                    </div>
                    <p class="terminal-text">{{ step.description }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const steps = [
    {
        title: "Step 1: Choose the Log File",
        description: "Select any log file from the operating system, websites, applications, etc. The program will monitor it for critical and fatal errors.",
        iconClass: "fas fa-file-alt"
    },
    {
        title: "Step 2: Real-Time Alerts",
        description: "When a critical or fatal error is detected, you will be immediately notified in the interface and a report will be automatically sent.",
        iconClass: "fas fa-bell"
    },
    {
        title: "Step 3: Sending Reports",
        description: "Detailed reports are sent to your Google Drive and can also be shared on Telegram, so you never miss an important error.",
        iconClass: "fas fa-paper-plane"
    },
    {
        title: "Step 4: Google Drive Integration",
        description: "Rest assured knowing that your reports will always be securely stored in Google Drive, ready for reference at any time.",
        iconClass: "fab fa-google-drive"
    }
];

const visibleSteps = ref([]);


const isVisible = (index) => visibleSteps.value.includes(index);


const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            if (!visibleSteps.value.includes(index)) {
                visibleSteps.value.push(index);
            }
        }
    });
}, {
    threshold: 0.5,
});

onMounted(() => {
    const elements = document.querySelectorAll('.step');
    elements.forEach((el, index) => {
        el.dataset.index = index;
        observer.observe(el);
    });
});

onBeforeUnmount(() => {
    observer.disconnect();
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;800&display=swap');

.features-overview {
    padding: 60px 40px;
    background-color: #222222;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Poppins', sans-serif;
    color: #e0e0e0;
    width: 100%;
}

.features-overview h2 {
    font-size: 1.5rem;
    font-weight: 800;
    color: #FFA500;
    margin-bottom: 30px;
    letter-spacing: 2px;
    text-transform: uppercase;
    text-align: left;
    width: 100%;
}

.steps-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    width: 100%;
}

.step {
    background-color: #333333;
    padding: 30px;
    border-radius: 12px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    text-align: left;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1200px;
    position: relative;
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.5s, transform 0.5s;
    border-left: 5px solid #FFA500;
}

.step.step-visible {
    opacity: 1;
    transform: translateY(0);
}

.step-header {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 15px;
}

.step-header h3 {
    font-size: 1.5rem;
    color: #FFA500;
    font-weight: 600;
    margin: 0;
    flex: 1;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.step-header i {
    font-size: 32px;
    color: #FFA500;
    transition: transform 0.3s ease;
}

.step-header i:hover {
    transform: scale(1.1);
}

.terminal-text {
    font-size: 1rem;
    color: #e0e0e0;
    line-height: 1.6;
    margin-top: 10px;
    font-family: 'Courier New', monospace;
    white-space: pre-wrap;
}

/* Responsividade */
@media (max-width: 1024px) {
    .features-overview {
        padding: 50px 30px;
    }

    .step {
        padding: 20px;
        width: 90%;
    }

    .step-header h3 {
        font-size: 1.4rem;
    }

    .step-header i {
        font-size: 28px;
    }
}

@media (max-width: 768px) {
    .features-overview {
        padding: 40px 20px;
    }

    .step {
        padding: 18px;
        width: 100%;
        margin-bottom: 20px;
    }

    .step-header h3 {
        font-size: 1.2rem;
    }

    .step-header i {
        font-size: 24px;
    }

    .terminal-text {
        font-size: 0.9rem;
    }
}

@media (max-width: 480px) {
    .features-overview {
        padding: 30px 15px;
    }

    .step {
        padding: 15px;
    }

    .step-header h3 {
        font-size: 1.1rem;
    }

    .step-header i {
        font-size: 22px;
    }

    .terminal-text {
        font-size: 0.85rem;
    }
}
</style>
