window.onload = function () {
    const signinBtn = document.getElementById("signin");
    const signupBtn = document.getElementById("signup");
    const box = document.querySelector(".box");

    signinBtn.addEventListener("click", () => {
        box.classList.remove("right-panel-active");
    });

    signupBtn.addEventListener("click", () => {
        box.classList.add("right-panel-active");
    });



    // Check if there's any saved registration data on page load
    const savedUserData = JSON.parse(localStorage.getItem("userData")) || {};
    const { username: savedUsername, password: savedPassword } = savedUserData;

    if (savedUsername && savedPassword) {
        document.getElementById("zhanghao1").value = savedUsername;
        document.getElementById("mima1").value = savedPassword;
        document.getElementById("queren").value = savedPassword; // Auto-fill confirm password
    }

    // Save user registration data when registering
    document.getElementById("zhuce").addEventListener("click", function () {
        const username = document.getElementById("zhanghao1").value;
        const password = document.getElementById("mima1").value;
        const confirmPassword = document.getElementById("queren").value;


    });
};
