<template>
    <div class="features-overview">
        <h2>How It Works</h2>
        <div class="steps-container">
            <div class="step" v-for="(step, index) in steps" :key="index">
                <div class="step-header">
                    <h3>{{ step.title }}</h3>
                    <i :class="step.iconClass"></i>
                </div>
                <p>{{ step.description }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
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
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;800&display=swap');

.features-overview {
    padding: 60px 40px;
    background-color: #f8f8f8;
    max-width: 1200px;
    margin: 0 auto;
    font-family: 'Poppins', sans-serif;
    color: #333;
}

.features-overview h2 {
    font-size: 2.5rem;
    font-weight: 800;
    color: #333;
    margin-bottom: 50px;
    text-align: left;
    letter-spacing: 2px;
}

.steps-container {
    display: flex;
    flex-direction: column;
    gap: 40px;
    align-items: flex-start;
}

.step {
    background-color: #fff;
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
    animation: fadeInUp 0.6s forwards;
    border-left: 5px solid #FFA500;
}

.step-header {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 15px;
}

.step-header h3 {
    font-size: 1.5rem;
    color: #333;
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

.step p {
    font-size: 1rem;
    color: #666;
    line-height: 1.6;
    margin-top: 10px;
}

@keyframes fadeInUp {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@media (max-width: 768px) {
    .features-overview {
        padding: 40px 20px;
    }

    .step {
        padding: 20px;
        max-width: 100%;
    }

    .step-header h3 {
        font-size: 1.3rem;
    }

    .step-header i {
        font-size: 28px;
    }
}
</style>
