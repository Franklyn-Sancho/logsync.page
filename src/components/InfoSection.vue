<template>
    <div class="info-section">
        <div class="info-section-reasons">
            <div class="info-header">
                <h1 class="info-title">Why LogSync?</h1>
            </div>

            <div class="reasons-container">
                <div class="reason">
                    <h3>Speed</h3>
                    <p>
                        Quickly identify and resolve errors in real-time with ultra-fast processing powered by Rust.
                    </p>
                </div>
                <div class="reason">
                    <h3>Integration</h3>
                    <p>
                        Automatically send detailed reports to Telegram and securely store them in the cloud, ensuring
                        accessibility anytime, anywhere.
                    </p>
                </div>
                <div class="reason">
                    <h3>Reliability</h3>
                    <p>
                        Keep your data secure and synchronized, reducing the risk of inconsistencies.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.info-section {
    padding: 2rem;
    height: 500px;
    background-color: #f8f8f8;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.info-section-reasons {
    font-family: 'Poppins', sans-serif;
    max-width: 1200px;
    width: 100%;
    padding: 2rem;
    display: flex;
    flex-direction: column;
}

.info-header {
    display: flex;
    align-items: flex-start;
    margin-bottom: 2rem;
}

.info-title {
    font-family: 'Poppins', sans-serif;
    font-size: 2rem;
    font-weight: 800;
    color: #333;

    letter-spacing: 2px;
    margin: 0;
    /* Remove margem padrão do h1 */
}

.reasons-container {
    display: flex;
    gap: 2rem;

    flex-wrap: wrap;

    justify-content: flex-start;

}

.reason {
    flex: 1 1 300px;
    max-width: 400px;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease, background-color 0.3s ease;
}

.reason:hover {
    transform: translateY(-8px);
}

.reason h3 {
    font-size: 1.8rem;
    font-weight: 700;
    margin-bottom: 1rem;
    letter-spacing: 1px;
    color: #333
}

.reason p {
    font-size: 1.2rem;
    font-weight: 200;
    line-height: 1.8;
    color: #333;

}
</style>
