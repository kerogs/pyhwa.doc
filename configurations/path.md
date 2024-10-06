# Path
::: danger
This feature is not yet fully supported. It may not work or may break the PyHwa server. It will be indicated in Github releases when it will be usable. This warning will then also be removed.
:::

## data_path
This is the directory where all your manga, manhwa, and manhua files are stored.. ***It will not contain any metadata***.
```ini
[path]
  
; This is the directory where all your manga, manhwa, and manhua files are stored.
data_path = static/content
```

## meta_path
All metadata that PyHwa automatically fetches from the Internet ([see metadata](/configurations/metadata)) will be saved in this folder. 
```ini
[path]

; This directory is used to save all metadata related to your manga, manhwa, etc.
; It is advisable not to modify this setting unless you are certain of what you are doing.
meta_path = static/meta
```