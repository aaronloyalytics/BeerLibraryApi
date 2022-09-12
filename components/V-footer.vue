<template>
    <footer class="footer-distributed" :style="isDarkMode ? {backgroundColor:'rgb(22,22,30)'} : null">

        <div class="footer-left">

            <h3>Aaron<span>Royan</span></h3>

            <p class="footer-links">
                <a href="/">Home</a>
                ·
                <a href="/about">About</a>
                ·
                <a href="/beer">Beer API</a>
            </p>

            <p class="footer-company-name">Copy</p>



        </div>

        <div class="footer-right">

            <p>Contact Me</p>

            <form onsubmit="submitHandler(content)">

                <input type="text" name="Uname" placeholder="Name">
                <input type="text" name="email" placeholder="Email">
                <textarea name="message" placeholder="Message"></textarea>
                <button type="submit">Send</button>

            </form>

        </div>

    </footer>


</template>
<script setup>
    const { isDarkMode } = useDarkMode();
const submitHandler = async (data) => {
    $fetch('~server/api/notion', {
        method: 'PATCH',
        headers: {
            Accept: 'application/json',
            'Notion-Version': '2022-06-28',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer secret_QtysD1bGY6vxtOLFqNjB90XikeOasmYiHjdByr4nRK2'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
    await new Promise((r) => setTimeout(r, 1000))
    submitted.value = true
    if (submitted.value == true) {
        alert('Submitted');
        await new Promise((r) => setTimeout(r, 1000));
        location.reload();
    }
}
</script>
  
<style>
@import '~/assets/style/V-footer.css';
</style>