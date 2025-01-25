<template>
    <footer class="app-footer">
        <div class="footer-container">
            <!-- Seção de Links -->
            <div class="footer-links">
                <div class="footer-section">
                    <h3>Useful Links</h3>
                    <ul>
                        <li><a href="/privacy-policy">Privacy Policy</a></li>
                        <li><a href="/terms-of-service">Terms of Service</a></li>
                        <li><a href="/documentation">Documentation</a></li>
                        <li><a href="/contact">Contact Us</a></li>
                        <li><a href="/sitemap">Sitemap</a></li>
                        <li><a href="/usage-rules">Usage Rules</a></li>
                    </ul>
                </div>

                <!-- Seção de Redes Sociais -->
                <div class="footer-section">
                    <h3>Follow Us</h3>
                    <div class="social-icons">
                        <a href="https://www.facebook.com" target="_blank">
                            <i class="fab fa-facebook"></i>
                        </a>
                        <a href="https://www.twitter.com" target="_blank">
                            <i class="fab fa-twitter"></i>
                        </a>
                        <a href="https://www.linkedin.com" target="_blank">
                            <i class="fab fa-linkedin"></i>
                        </a>
                        <a href="https://www.instagram.com" target="_blank">
                            <i class="fab fa-instagram"></i>
                        </a>
                        <a href="https://www.youtube.com" target="_blank">
                            <i class="fab fa-youtube"></i>
                        </a>
                    </div>
                </div>
            </div>

            <!-- Seção de Contato -->
            <div class="footer-contact">
                <h3>Contact Us</h3>
                <ul>
                    <li><a href="">test@test.com</a></li>
                    <li><a href="tel:+1234567890">+55123456789</a></li>
                </ul>
            </div>

            <!-- Seção de Assinatura -->
            <div class="footer-signup">
                <h3>Subscribe to our Newsletter</h3>
                <input type="email" placeholder="Enter your email" />
                <button>Subscribe</button>
            </div>
        </div>

        <!-- Informações de direitos reservados e "Desenvolvido por" -->
        <div class="footer-bottom">
            <p>Developed by Franklyn Sancho</p>
            <p>&copy; 2025 All rights reserved</p>
        </div>
    </footer>
</template>

<style scoped>
.app-footer {
    background-color: #333;
    color: #e0e0e0;
    padding: 20px 20px 0 20px;
    font-family: 'Poppins', sans-serif;
}

.footer-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
}

.footer-section {
    flex: 1 1 300px;
    margin-bottom: 30px;
}

.footer-text p {
    margin: 5px 0;
    font-size: 1rem;
    color: #f0f0f0;
}

.footer-links h3,
.footer-contact h3,
.footer-signup h3 {
    color: #FFA500;
    font-size: 1.4rem;
    margin-bottom: 15px;
}

.footer-links ul,
.footer-contact ul {
    list-style: none;
    padding: 0;
}

.footer-links li,
.footer-contact li {
    margin: 10px 0;
}

.footer-links a,
.footer-contact a {
    color: #e0e0e0;
    text-decoration: none;
    transition: color 0.3s ease;
}

.footer-links a:hover,
.footer-contact a:hover {
    color: #FFA500;
}

.social-icons a {
    font-size: 1.8rem;
    color: #e0e0e0;
    margin-right: 15px;
    transition: color 0.3s ease;
}

.social-icons a:hover {
    color: #FFA500;
}

.footer-signup input {
    padding: 10px;
    width: 250px;
    margin-right: 10px;
    border: 1px solid #444;
    background-color: #1a1a1a;
    color: #fff;
}

.footer-signup button {
    padding: 10px 20px;
    background-color: #FFA500;
    color: white;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.footer-signup button:hover {
    background-color: #e07b00;
}

@media (max-width: 1024px) {
    .footer-container {
        flex-direction: column;
        align-items: center;
    }

    .footer-section {
        flex: 1 1 100%;
        text-align: center;
    }

    .footer-signup input {
        width: 200px;
    }

    .footer-signup button {
        width: 150px;
    }

    .footer-bottom p {
        font-size: 0.9rem;
    }
}

@media (max-width: 768px) {
    .footer-container {
        padding: 30px 15px;
    }

    .footer-signup input {
        width: 180px;
    }

    .footer-signup button {
        width: 130px;
    }

    .footer-bottom p {
        font-size: 0.85rem;
    }

    .social-icons a {
        font-size: 1.5rem;
    }
}

/* Informações do rodapé */
.footer-bottom {
    text-align: center;
    margin-top: 30px;
}

.footer-bottom p {
    color: #e0e0e0;
    margin: 5px 0;
    font-size: 1rem;
}
</style>