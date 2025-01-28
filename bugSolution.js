```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <View>
      <Text>{data?.name ?? 'Loading...'}</Text> {/* Solution */}
    </View>
  );
}
```
The use of optional chaining (`data?.name`) ensures that `data.name` is only accessed if `data` is not `null` or `undefined`.  The nullish coalescing operator (`??`) provides a default value ('Loading...') if `data?.name` is `null` or `undefined`. This prevents the error and provides a better user experience.