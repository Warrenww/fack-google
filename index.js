const fack_data = {
  title: "This is a test title",
  url: "https://url.com/test",
  content: "This is a test content string that is not a valid URL string for this test case and should not be interpreted as a valid URL string for this test case and should not be interpreted as a valid URL string for this test case and should not be interpreted as a valid URL string for this test case "
};
function search(){
  let text = $("#search input").val();
  window.open("/result.html?search="+text);
}
$(document).ready(function(){
  console.log("???")
  $("#search input").keydown((e) => {
    if(e.keyCode == 13) search();
  });
  $("#search input").val(location.search.split("=")[1]);
  for(let i = 0; i < 20; i++){
    $(".searchResults").append(`
      <div class='result'>
        <div class='url'>${fack_data.url}</div>
        <h1 class='title'>${fack_data.title}</h1>
        <div class='content'>${fack_data.content}</div>
      </div>
      `)
  };

});
