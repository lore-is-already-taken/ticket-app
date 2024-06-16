const checkPasswords = (pass: string, checkpass: string) => {
	if (pass === checkpass) {
		return true;
	} else {
		return false;
	}
};

export { checkPasswords };
