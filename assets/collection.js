$(document).ready(function () {
    handleSubmit();
});
function handleSubmit() {
    console.log('asdasd');
    $("body").on('submit', 'form', function (e) {
        e.preventDefault();
        var query = JSON.stringify(`
        query {
  appInstallation {
    accessScopes {
      handle
      description
    }
  }
}

             `);
        $.ajax({
            type: "POST",
            url: "https://caerux-team.myshopify.com/admin/api/2023-07/graphql.json",
            dataType: "application/json",
            headers: {
                'X-Shopify-Access-Token': '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'
            },
            data: {
                query: query,
            },
            success: function (res) {
                console.log(res);
            },
            error: function (err) {
                console.log(err);
            }
        });
    })
}