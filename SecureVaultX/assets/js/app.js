function login() {
    const u = document.getElementById("username").value;
    const p = document.getElementById("password").value;
    const status = document.getElementById("status");

    if (u === "Dilipan" && p === "1234") {
        status.style.color = "lightgreen";
        status.innerText = "Access Granted ✓";
        setTimeout(() => {
            window.location.href = "encrypt.html";
        }, 800);
    } else {
        status.style.color = "red";
        status.innerText = "Invalid Credentials";
    }
}

function encrypt() {
    const text = document.getElementById("plainText").value;
    const key = document.getElementById("encKey").value;
    document.getElementById("cipherText").value =
        btoa(text + key);
}

function goDecrypt() {
    window.location.href = "decrypt.html";
}

function decrypt() {
    const cipher = document.getElementById("cipherInput").value;
    const key = document.getElementById("decKey").value;
    const decoded = atob(cipher);

    document.getElementById("result").value =
        decoded.replace(key, "");
}

function restart() {
    window.location.href = "index.html";
}
