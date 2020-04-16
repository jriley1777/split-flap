import * as functions from 'firebase-functions';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//

export const timedDelete = functions.database.ref('/messages/{messageId}/').onCreate((snapshot, context) => {
    return setTimeout(() => {
        snapshot.ref.remove();
    }, 10000);
})