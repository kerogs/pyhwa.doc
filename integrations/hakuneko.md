# Hakuneko
:::tip

Pyhwa has been designed to work with the file format returned by Hakuneko.

With a simple configuration, make HakuNeko downloads work with PyHwa

:::

1. Go to HakuNeko setting
![](/contents/hakuneko/step1.png)

2. Search for the “Manga Directory” line and click on the folder logo to select a folder.
![](/contents/hakuneko/step2.png)

3. Select the folder where you told PyHwa to store your manga/manhwa
::: info
The default path is: ``[pathToPyhwa]/pyhwa/static/content``.

::: details
To see more with path [click here](/configurations/path)

:::
![](/contents/hakuneko/step3.png)

And that's it, when you download from HakuNeko, each manga will be automatically installed in the ``/content/`` folder and PyHwa will recognize them and download the metadata automatically.