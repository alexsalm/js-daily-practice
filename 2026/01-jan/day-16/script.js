const heading = document.querySelector("h1");
const secondHeading = document.querySelector("h2");
heading.textContent = future();
secondHeading.textContent = `23 is a prime number ? ${isPrime(23)}`;
secondHeading.textContent = `16 is a prime number? ${isPrime(16)}`;

function future() {
    return "You'll never have flying cars";
}

function isPrime(x) {
    for (let i = 2; i < x; i++) {
        if (x % i === 0) return false;
    }

    return x > 1;
}


