# Pacakges up the App

clean:
	-rm autologin.zip

zip:
	zip -r autologin.zip . \
		--exclude \*.DS_Store\
		--exclude \*.git\* \
		--exclude \*Makefile \
		--exclude \*store_assets\* \
		--exclude \*README.md
