Api standards
=============
all route are lowercase words and separated with '_'.

every success request should have             {success : true}
every unsuccessful request should have        {success : false}

all thrown errors send back a unsuccessful json with err(error object);

