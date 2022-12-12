function save_options() {
    var color = document.getElementById('color').value;
    var oAndE = document.getElementById('oAndE').checked;
    var manMade = document.getElementById('manMade').checked;
    var impacts = document.getElementById('impacts').checked;
    var science = document.getElementById('science').checked;
    chrome.storage.sync.set({
      highlightColor: color,
      oAndE: oAndE,
      manMade: manMade,
      impacts: impacts,
      science: science
    }, function() {
      var status = document.getElementById('status');
      status.textContent = 'Options saved.';
      setTimeout(function() {
        status.textContent = '';
      }, 750);
    });
  }

  function restore_options() {
    chrome.storage.sync.get({
      highlightColor: 'red',
      oAndE: true,
      manMade: true,
      impacts: true,
      science: true
    }, function(items) {
      document.getElementById('color').value = items.highlightColor;
      document.getElementById('oAndE').checked = items.oAndE;
      document.getElementById('manMade').checked = items.manMade;
      document.getElementById('impacts').checked = items.impacts;
      document.getElementById('science').checked = items.science;
    });
  }
  document.addEventListener('DOMContentLoaded', restore_options);
  document.getElementById('save').addEventListener('click',
      save_options); 