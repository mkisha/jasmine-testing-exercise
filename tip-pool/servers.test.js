describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should not add a new server to allServers on submitServerInfo() with no input', function () {
    serverNameInput.value = '';
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(0);
  });


  it('should update servertable on updateServerTable()', function () {
    submitServerInfo();
    updateServerTable();

    let currentTd = document.querySelectorAll('#serverTable tbody tr td');

    expect(currentTd.length).toEqual(2);
    expect(currentTd[0].innerText).toEqual('Alice');
    expect(currentTd[1].innerText).toEqual('$0.00');
   
  });






  afterEach(function() {
    // teardown logic
    
    serverNameInput.value = '';
    serverId = 0;
    serverTbody.innerHTML = '';
    allServers = {}; 

  });
});
