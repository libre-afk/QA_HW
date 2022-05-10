# Git_hw_2

1. На локальном репозитории сделать ветки для:  
- Postman  
- Jmeter  
- CheckLists  
- Bug Reports  
- SQL  
- Charles  
- Mobile testing  
==========================================================================  
`git branch Postman && git branch Jmeter`  
`git branch CheckLists && git branch SQL`  
`git branch Bug_Reports && git branch Charles`  
`git branch Mobile testing`
2. Запушить все ветки на внешний репозиторий  
==========================================================================  
	`git push -u --all`

3. В ветке Bug Reports сделать текстовый документ со структурой баг репорта  
==========================================================================  
	`git checkout Bug_Reports && cat > bug-report.txt`  
*Summary  
Project  
Component  
Version  
Severity  
Priority  
Status  
Author  
Assigned To  
Environment  
Steps to Reproduce  
Actual Result  
Expected Result  
Attachment*

4. Запушить структуру багрепорта на внешний репозиторий  
==========================================================================  
	`git add . && git commit -m "bug-report" && git push`  

5. Вмержить ветку Bug Reports в Main  
==========================================================================  
	`git checkout main && git merge Bug_Report`  

6. Запушить main на внешний репозиторий.  
==========================================================================  
	`git push`  

7. В ветке CheckLists набросать структуру чек листа.  
==========================================================================  
	`cat > checklist.txt  (создаем и редактируем файл)`  
	*What we will do  
	What we need not to forget  
	What we will check*
	
8. Запушить структуру на внешний репозиторий  
==========================================================================  
	`git add . && git commit -m "checklist" && git push`
	
9. На внешнем репозитории сделать Pull Request ветки CheckLists в main  
==========================================================================  
	В веб интерфейсе нажать кнопку *Pull Request*, прoверить из какой
	ветки в какую мердж. В нижней части страницы в выпадающем списке выбрать
	*Merge Pull Request*, затем *Confirm Merge*
	
10. Синхронизировать Внешнюю и Локальную ветки Main  
==========================================================================  
	`git checkout main && git pull`
