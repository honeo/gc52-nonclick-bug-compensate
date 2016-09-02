/*
	1. Anchor要素にFocusしている状態で
	2. Enterキーによるkeypressが発火し
	3. 直後にクリックイベントが起こらなかった場合
	4. 当該Anchor要素にクリックイベントを発火させる
*/

// Var
let count = 0;
let status = true;

// Event
window.addEventListener('keypress', clickObserver, true);

/*
	Anchorにkeypress発火後から次のスタックまでの間にAnchorにclickイベントが発生していない場合は発生させる
*/
function clickObserver(e){
	// 有効時、Anchor要素にEnterが押されたら
	if(status && e.keyCode===13 && e.target.tagName==='A'){
		const anchor = e.target;

		// クリック予約カウントメモ
		count++;

		// Anchorのclickイベントの発生を監視
		anchor.addEventListener('click', clickCounter, false);

		setTimeout(after, 0, anchor);
	}
}

// click監視を解除し、カウントがあれば減らしてからクリックを発生させる
function after(anchor){
	anchor.removeEventListener('click', clickCounter, false);
	if( count ){
		count--;
		anchor.click();
	}
}

// clickEventが発火したらcountを減らす
function clickCounter(){
	count--;
}

/*
	ON/OFFスイッチ
*/
const controller = {
	enable(){
		status = true;
	},
	disable(){
		status = false;
	},
	toggle(){
		status = !status;
	},
	get status(){
		return status;
	}
}

export default controller;
