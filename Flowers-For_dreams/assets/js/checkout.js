$(function(){

  $('.delete').on('click', function(){
    if (confirm('Are you sure you wish to delete this order?')){
      $(this).closest('tr').remove()
    };
  });

  $('.edit').on('click', function(){
    alert('piss off')
  });

});