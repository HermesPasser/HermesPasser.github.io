@rem Put inside of the quotation marks the location of mangafox downloader 
@cd "C:\Users\Diogo\Dropbox\zProjects\Dev\Public\Mangafox Downloader" 

@rem Make the folder for the chapter 
@mkdir C:\Users\Diogo\Desktop\vanadis\c037 
@rem Download the chapter in the folder defined above 
@ruby main.rb m:madan_no_ou_to_vanadis v:v07 c:c037 p:C:\Users\Diogo\Desktop\vanadis\c037 
@rem Compact the folder 
@powershell -command "& {&Compress-Archive C:\Users\Diogo\Desktop\vanadis\c037 C:\Users\Diogo\Desktop\vanadis\c037.zip}" 
@rem Delete the folder 
@rmdir C:\Users\Diogo\Desktop\vanadis\c037 /s /q 

@rem Loop that will be repeated 'n' times all inside of the parentheses, 
@rem FOR /L %%A IN (initial chapter,1 , last chapter) DO 
@rem %%A will be replaced by the current value of the loop 
@FOR /L %%A IN (38,1,41) DO ( 
   @mkdir C:\Users\Diogo\Desktop\vanadis\c%%A 
   ruby main.rb m:madan_no_ou_to_vanadis v:v08 c:c0%%A p:C:\Users\Diogo\Desktop\vanadis\c%%A 
   @powershell -command "& {&Compress-Archive C:\Users\Diogo\Desktop\vanadis\c%%A C:\Users\Diogo\Desktop\vanadis\c%%A.zip}" 
   @rmdir C:\Users\Diogo\Desktop\vanadis\c%%A /s /q 
) 

pause