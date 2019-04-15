function modal(vid){
	$(vid).find('#myModal').remove();
	$(vid).append('<div class="modal fade in" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="display:block"><div class="modal-dialog">'
			+'<div class="loadEffect"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div></div>')
	
}