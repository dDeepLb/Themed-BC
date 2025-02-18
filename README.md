<h2 align="center">
  Themed BC
</h2>

<h3>
  Features:

  * [Custom themes](#examples-of-themes)
  * Integration with other mods.
  * Profiles saving that you can use later.
  * Locale-based time (ex. 01:37 PM or 13:37), depending on your system settings.
  * Indicating if character you're inspecting, disconnected or leaved.
</h3>

<details>
  
  <summary><h2>Installation</h2></summary>

  ### FUSAM (Recommended)
  https://sidiousious.gitlab.io/bc-addon-loader
  
  ### Tampermonkey
  https://github.com/dDeepLb/Themed-BC/raw/main/loader.user.js
  
  ### Bookmark
  ``` javascript
  javascript:(()=>{fetch('https://ddeeplb.github.io/Themed-BC/themed.js').then(r=>r.text()).then(r=>eval(r));})();
  ```

</details>

<details>

  <summary><h2>Examples of themes</h2></summary>

<figure>
  
  <img src="https://github.com/dDeepLb/Themed-BC/assets/71733861/baa87897-37af-4d32-97c4-012c09823697" alt="Default theme" title="Default theme"/>
  <figcaption>Default theme</figcaption>
  
</figure>

<figure>
  
  <img src="https://github.com/dDeepLb/Themed-BC/assets/71733861/6669a58d-b346-4f9a-a81c-e719b8c5467d" alt="Author's theme" title="Author's theme"/>
  <figcaption>Author's theme</figcaption>


  
</figure>

<figure>
  
  <img src="https://github.com/dDeepLb/Themed-BC/assets/71733861/e92e0d5e-295e-404f-85f4-a143778a141c" alt="Sil's theme" title="Sil's theme"/>
  <figcaption>Sil's theme</figcaption>
  
</figure>

<figure>
  
  <img src="https://github.com/dDeepLb/Themed-BC/assets/71733861/205365f6-bf54-4f96-9a38-05984664d17b" alt="nemesea's theme" title="nemesea's theme"/>
  <figcaption>nemesea's theme</figcaption>

</figure>

</details>

<details>
  
  <summary><h2>Translation</h2></summary>
  
  * Feel free to create PR with translations using [Translation folder](./src/Translations/)

  Step:
  1. If there is no file for your language, create one in format `[lang key].lang`, ex. `ua.lang`.
  2. For now just copy content of `en.lang` and translate it.
  3. Build project and test if translations look ok (if no text gets out of buttons etc).
  4. Create a Merge Request
    
</details>

> Huge thanks to Ellena, weboos and Jamie for support!
