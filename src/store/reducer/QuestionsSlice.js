import { createSlice, current } from "@reduxjs/toolkit";



const QuestionsSlice = createSlice({
    name: "Questions",
    initialState: {
        searchedQuestions: [],
        questions: [
            {
                "user": "xinaiz",
                "date_post": "Feb 5 at 0:04",
                "title_post": "How do I clear undo/redo history in Jetpack Compose TextField (or BasicTextField)",
                "description_post": "I'm developing an desktop app in Compose. Basically I have a text editor where I can open different text files. The issue is that TextField keeps it's undo/redo state internally (as far as I know). So when I open file A, then file B, and press Ctrl+Z, file B contents change to file A. I'd like to clear undo/redo state when I open new file, or even better, keep that state per file path (but that's extension of my requirements).  My current approach to this (Disabling Ctrl + Z/Ctrl + Y)  Any ideas?  The problem arises because you're using a single composable with different data. By default, the view will reuse anything that isn't explicitly marked to be reset when new data arrives - and that's usually expected.  You could have passed the key parameter to all your remember/effects to reset them one by one, but the easiest way to let Compose know that view shouldn't be reused at all is to wrap it with key:  One alternative could be using one list for TextFieldValue or String and another one for redo.  Result    Implementation  TextField that updates or gets values from it.  Usage",
                "tags_post": [
                    "kotlin",
                    "android-jetpack-compose",
                    "textfield",
                    "undo-redo",
                    "compose-desktop"
                ],
                "answers": [
                    {
                        "user": "Phil Dukhov",
                        "date_of_answer": "Feb 9 at 7:03",
                        "content": "The problem arises because you're using a single composable with different data. By default, the view will reuse anything that isn't explicitly marked to be reset when new data arrives - and that's usually expected.  You could have passed the key parameter to all your remember/effects to reset them one by one, but the easiest way to let Compose know that view shouldn't be reused at all is to wrap it with key:",
                        "upvotes": "1"
                    },
                    {
                        "user": "Thracian",
                        "date_of_answer": "Feb 8 at 18:43",
                        "content": "One alternative could be using one list for TextFieldValue or String and another one for redo.  Result    Implementation  TextField that updates or gets values from it.  Usage",
                        "upvotes": "0"
                    }
                ],
                "post_id": "169a8698-9e56-4a53-9dbc-9129e7f43f0d"
            },
            {
                "user": "2540625",
                "date_post": "Feb 3 at 21:39",
                "image": "https://i.stack.imgur.com/3Z3Zp.png",
                "title_post": "How to remove marker from <details> element on Safari?",
                "description_post": "I have tried the many solutions suggested on other posts. None work on macOS Safari nor iOS Safari. What am I missing, how can I remove the triangle-shaped marker from \u201cBob\u201d?  Screenshot:  The stylesheet below uses more code than I originally wrote, but it shows how I\u2019m trying everything suggested by other posts.  And it overuses !important flags to be extra sure they\u2019re working.  It also uses bizarre colors to make obvious which elements are which.  A live demo is here: https://jsbin.com/cepufayodo/edit?html,css,output  According to this question",
                "tags_post": [
                    "css",
                    "safari",
                    "html-tag-details"
                ],
                "answers": [
                    {
                        "user": "Carlos Vidal",
                        "date_of_answer": "Feb 9 at 2:53",
                        "content": "According to this question",
                        "upvotes": "0"
                    }
                ],
                "post_id": "497b67b3-afc3-44d2-b8ad-10b32dceb068"
            },
            {
                "user": "Azeem",
                "date_post": "Jan 31 at 20:12",
                "title_post": "GitHub Actions dotnet nuget pack error : Description is required",
                "description_post": "I am trying to run a dotnet pack command in GitHub Actions workflow like so:  Running the command:  locally works fine.  I have the description field set in both my csproj and nuspec files. But when the GitHub Actions workflow runs, it fails with this error:  Giving me the error:  Am I not setting the description correctly?  Here is my template.csproj:  and my template.nuspec:  Both have descriptions.  Answering to this kind of questions is challenging due to the multitude of potential factors contributing to the problem.  However the error is self explanatory: \"it doesn't find the description xml node within your csproj file\".  I can list some potential fixes / things you should check:  In this case you would just need to run this command:",
                "tags_post": [
                    ".net",
                    "nuget",
                    "github-actions"
                ],
                "answers": [
                    {
                        "user": "Marco Merola",
                        "date_of_answer": "Feb 8 at 9:41",
                        "content": "Answering to this kind of questions is challenging due to the multitude of potential factors contributing to the problem.  However the error is self explanatory: \"it doesn't find the description xml node within your csproj file\".  I can list some potential fixes / things you should check:  In this case you would just need to run this command:",
                        "upvotes": "0"
                    }
                ],
                "post_id": "01c1123c-29e8-4c60-bd2d-d238942a3f42"
            },
            {
                "user": "Eugene Astafiev",
                "date_post": "Feb 1 at 21:43",
                "title_post": "Extract the name of the folder housing an email",
                "description_post": "I am trying to extract email metadata from messages in an Outlook Exchange account. I derive various metadata as described here, but I can't get the name of the folder where the email has been stored.  What I have so far:  I tried variants of the word \"folder\" following the word \"Select,\". It returns an empty column.  Use MailItem.Parent.Name. But since you are processing items from a particular folder, you already know what the parent folder is - just use $item.Name  You can select the parent name property like this:  (and you don't need the script block, unless you want to recursively process the folders)  Example output:  Each item in Outlook has the Parent property which stands for the folder where the items is located. I am not sure whether the property call will work correctly in PS, but let's try the following:  Also you may check the parent folder name in the loop, but I don't see how it can help in the loop:",
                "tags_post": [
                    "powershell",
                    "outlook",
                    "extract",
                    "metadata",
                    "office-automation"
                ],
                "answers": [
                    {
                        "user": "Dmitry Streblechenko",
                        "date_of_answer": "Feb 1 at 21:56",
                        "content": "Use MailItem.Parent.Name. But since you are processing items from a particular folder, you already know what the parent folder is - just use $item.Name",
                        "upvotes": "0"
                    },
                    {
                        "user": "mhu",
                        "date_of_answer": "Feb 10 at 16:28",
                        "content": "You can select the parent name property like this:  (and you don't need the script block, unless you want to recursively process the folders)  Example output:",
                        "upvotes": "0"
                    },
                    {
                        "user": "Eugene Astafiev",
                        "date_of_answer": "yesterday",
                        "content": "Each item in Outlook has the Parent property which stands for the folder where the items is located. I am not sure whether the property call will work correctly in PS, but let's try the following:  Also you may check the parent folder name in the loop, but I don't see how it can help in the loop:",
                        "upvotes": "0"
                    }
                ],
                "post_id": "8a1be96d-6ea0-453c-8db0-dc023f1629f4"
            },
            {
                "user": "halfer",
                "date_post": "Feb 5 at 18:12",
                "title_post": "How to effectively communicate operation degradations in gRPC services?",
                "description_post": "I'm currently working on enhancing the robustness and clarity of communication between gRPC services and clients, especially around the concept of operation degradations. In many scenarios, operations can partially succeed or encounter non-critical issues that clients should be aware of, without necessarily treating these as outright failures.  Standard gRPC responses typically include either a success response or an error, but there's a gray area for operations that are successful with caveats (e.g., warnings about nearing quota limits, informational messages about optimization, or minor issues that don't halt the operation).  Is there an industry standard that explains how we can structure our gRPC responses to include these \"degradation\" details in a way that's standardized across services, and actionable for clients?  My Proposed Solution: I'm considering introducing a DegradationDetail message in our protobuf definitions that can encapsulate the severity and details of any degradations encountered during an operation. Here's a sketch of what that might look like:  This DegradationDetail could then be included in response messages as an optional field. For operations that fully succeed without any issues, this field would be absent. For operations with degradations, this field provides a structured way to communicate what happened, its severity, and what parts of the operation were affected. This would then be communicated in service response for each operation if needed.  Questions:  I'm eager to hear feedback from the community on this approach, especially from those who have tackled similar challenges in their gRPC services.  Your approach does enhance the communication clarity between gRPC services and clients.\nAs a pseudo-code example (in Go, since it is the language I use most these days)  Not that I know of.  The main alternative to your solution is including the gRPC rich error model: it allows sending detailed error information using the Status message (which can include arbitrary metadata).\nYou could consider leveraging this for error conditions, reserving DegradationDetail for non-error conditions that still require attention.  You also have the concept of Graceful Degradation, when a component (such as a microservice) continues to work with degraded functionality, when it is unable to function fully.\nThat document points to gRPC status codes, which goes way beyond \"success/failure\".  I would still consider using gRPC error, leveraging the built-in error handling mechanism to include detailed error information alongside standard error responses.  That would involve the Status message, which can encapsulate both a numeric code and a human-readable message, as well as custom metadata in the form of google.rpc.Status with additional error details.  That approach could be useful for scenarios where you want to communicate more nuanced error states, or additional context about failures or warnings without necessarily modifying the primary response structure of your RPC calls.  You would define custom error detail messages using protobuf. These can be similar to your DegradationDetail message but designed to be included in error metadata.  In your gRPC service implementation, you can use the status package from the Go gRPC library to create and return rich errors that include DegradationDetail as part of the error's details.  Clients receiving the error can extract and handle the DegradationDetail from the Status details.  The cons for that approach:  With your solution, clients can check the operation_status field of each response to determine if further attention is needed.\nFor example, in Go:  In theory, yes: the trade-off in flexibility versus standardization usually leans towards benefiting standardization in large-scale systems. You would want consistency in error handling and response formats, that would significantly reduces complexity and the burden on client-side implementations.\nHowever, make sure there is enough flexibility within the DegradationDetail message to cover the various scenarios services might encounter without making the message too generic or cumbersome to use.  And make sure the introduction of degradation details is backward compatible with existing clients. That may involve versioning your protobufs or providing default behavior for clients unaware of the DegradationDetail structure. You would also need to incorporate logging or monitoring around the use of degradation details to track and analyze their occurrence and impact.",
                "tags_post": [
                    "grpc",
                    "api-design"
                ],
                "answers": [
                    {
                        "user": "VonC",
                        "date_of_answer": "Feb 8 at 11:04",
                        "content": "Your approach does enhance the communication clarity between gRPC services and clients.\nAs a pseudo-code example (in Go, since it is the language I use most these days)  Not that I know of.  The main alternative to your solution is including the gRPC rich error model: it allows sending detailed error information using the Status message (which can include arbitrary metadata).\nYou could consider leveraging this for error conditions, reserving DegradationDetail for non-error conditions that still require attention.  You also have the concept of Graceful Degradation, when a component (such as a microservice) continues to work with degraded functionality, when it is unable to function fully.\nThat document points to gRPC status codes, which goes way beyond \"success/failure\".  I would still consider using gRPC error, leveraging the built-in error handling mechanism to include detailed error information alongside standard error responses.  That would involve the Status message, which can encapsulate both a numeric code and a human-readable message, as well as custom metadata in the form of google.rpc.Status with additional error details.  That approach could be useful for scenarios where you want to communicate more nuanced error states, or additional context about failures or warnings without necessarily modifying the primary response structure of your RPC calls.  You would define custom error detail messages using protobuf. These can be similar to your DegradationDetail message but designed to be included in error metadata.  In your gRPC service implementation, you can use the status package from the Go gRPC library to create and return rich errors that include DegradationDetail as part of the error's details.  Clients receiving the error can extract and handle the DegradationDetail from the Status details.  The cons for that approach:  With your solution, clients can check the operation_status field of each response to determine if further attention is needed.\nFor example, in Go:  In theory, yes: the trade-off in flexibility versus standardization usually leans towards benefiting standardization in large-scale systems. You would want consistency in error handling and response formats, that would significantly reduces complexity and the burden on client-side implementations.\nHowever, make sure there is enough flexibility within the DegradationDetail message to cover the various scenarios services might encounter without making the message too generic or cumbersome to use.  And make sure the introduction of degradation details is backward compatible with existing clients. That may involve versioning your protobufs or providing default behavior for clients unaware of the DegradationDetail structure. You would also need to incorporate logging or monitoring around the use of degradation details to track and analyze their occurrence and impact.",
                        "upvotes": "0"
                    }
                ],
                "post_id": "35d99f04-da28-42fd-b7b1-ac40fa99749a"
            },
            {
                "user": "MendyK",
                "date_post": "Jan 3 at 18:28",
                "title_post": "Why is React Native debugger opening in x86 version of Chrome, and not arm64?",
                "description_post": "I'm using react native with Expo/Hermes on a mac M1. When I open the app and hit \"open debugger\" it opens the debugger in an x86 version of chrome, which is extremely slow. Why is this happening?  I don't have that version of chrome installed, so I have no idea where it's coming from.  Chrome version installed: 120.0.6099.129 (Official Build) (arm64)  React native: 0.72.5  Expo: 49.0.10  Steps to reproduce:  The x86 browser you see it's an Embedded Chrome DevTools Panel, that might be on your node_modules.  According to this page on the docs:  On the Hermes Debugger/Expo tab, the doc doesn't mention any other browser than Chrome, just specifically chrome. But, I managed to find a step-by-step procedure to set up remote debugging:  This is now deprecated on react-native 0.73, but you're using 0.72.5, so it will work for now. And, it might still be slow, because it will use chrome for the debugging still.  If you want to do it the way the newer react-native versions intend to, or see how you can use safari to debug your app, you can follow the steps on this page.  You might want to try Flipper and see if it is faster, but the docs say it uses the same chrome Devtools Panel too.  ",
                "tags_post": [
                    "typescript",
                    "react-native",
                    "expo",
                    "google-chrome-devtools",
                    "arm64"
                ],
                "answers": [
                    {
                        "user": "William Brochensque junior",
                        "date_of_answer": "Feb 9 at 14:51",
                        "content": "The x86 browser you see it's an Embedded Chrome DevTools Panel, that might be on your node_modules.  According to this page on the docs:  On the Hermes Debugger/Expo tab, the doc doesn't mention any other browser than Chrome, just specifically chrome. But, I managed to find a step-by-step procedure to set up remote debugging:  This is now deprecated on react-native 0.73, but you're using 0.72.5, so it will work for now. And, it might still be slow, because it will use chrome for the debugging still.  If you want to do it the way the newer react-native versions intend to, or see how you can use safari to debug your app, you can follow the steps on this page.  You might want to try Flipper and see if it is faster, but the docs say it uses the same chrome Devtools Panel too.  ",
                        "upvotes": "-1"
                    }
                ],
                "post_id": "7e57e0f5-b8b8-48bd-9868-0d1d6966b7bd"
            },
            {
                "user": "q0987",
                "date_post": "Feb 6 at 0:47",
                "title_post": "yum failed to work if I run some shell commands",
                "description_post": "I am using WSL(Oracle Linux 9.2). If I run some shell commands, then I will not be able to use yum anymore.  For example,  Then any yum command will fail and report errors similar as follows:  Question> Is there a workaround that I can fix this issues without breaking the yum?  Thank you  As seen in the comments, one solution would be to run following command after source:",
                "tags_post": [
                    "windows-subsystem-for-linux"
                ],
                "answers": [
                    {
                        "user": "Philippe",
                        "date_of_answer": "Feb 9 at 21:16",
                        "content": "As seen in the comments, one solution would be to run following command after source:",
                        "upvotes": "1"
                    }
                ],
                "post_id": "ba1f9f3c-926c-4797-a098-c62580a0acc9"
            },
            {
                "user": "Kinyanjui Kamau",
                "date_post": "Jan 18 at 7:36",
                "title_post": "SAP B1 Error: (Exception from HRESULT: 0x80010105 (RPC_E_SERVERFAULT",
                "description_post": "I am getting an error when I open a SAP B1 form a second time, error is not thrown when I open the form the first time after running the addon.  Error message:  This is a b1f form built through Visual Studio.  The error gets thrown here:    What can I do to resolve this issue?  Even though your error comes from the server, check first if some safeguard checks in your client code would be enough:  You might at least capture the error on the client side.",
                "tags_post": [
                    "c#",
                    "sapb1"
                ],
                "answers": [
                    {
                        "user": "VonC",
                        "date_of_answer": "Jan 24 at 7:00",
                        "content": "Even though your error comes from the server, check first if some safeguard checks in your client code would be enough:  You might at least capture the error on the client side.",
                        "upvotes": "-1"
                    }
                ],
                "post_id": "5f1260bb-c37d-4f1d-b576-8097f7fe5c35"
            },
            {
                "user": "Ferdinando Randisi",
                "date_post": "Feb 17, 2018 at 18:01",
                "title_post": "Computing autocorrelation of vectors with numpy",
                "description_post": "I'm struggling to come up with a non-obfuscating, efficient way of using numpy to compute a self correlation function in a set of 3D vectors.  I have a set of vectors in a 3d space, saved in an array  their self correlation function is defined as  in case the image above doesn't stay available, the formula is also printed below: C(t,{v}n) = \\frac 1{n-t}\\sum{i=0}^{n-1-t}\\vec v_i\\cdot\\vec v_{i+t}  I'm struggling to code this up in an efficient way, non-obfuscating way. I can compute this expliticly with two nested for loops, but that's slow. There is a fast way of doing it by using one of the embedded functions in numpy, but they seem to be using an entirely different definition of correlation function. A similar problem has been solved here, How can I use numpy.correlate to do autocorrelation? but that doesn't handle vectors. Do you know how can I solve this?  The NumPy routines are for 1D arrays. As a \"minimal\" improvement, use a vectorized operation for the normalisation step (use of np.arange in the before-to-last line):  For larger array sizes, you should consider using the Fourier Transform algorithm for correlation. Check out the examples of the library tidynamics if you are interested in that (disclaimer: I wrote the library, it depends only on NumPy).  For reference, here are the timings for a NumPy-code (that I wrote for testing), your code vector_autocorrelate and tidynamics.  You can see the results:  or plot them  For anything but very small data series, the \"N**2\" algorithm is unusable.  I'm posting the answer here in case someone else will need it, since it took me quite some time to figure out a viable approach. I ended up solving this by defining the following function  If anybody has a better idea, I would really like to hear that since I think the current one is still not as compact as it should be. It's better than nothing though, which is why I'm posting it here.  Here's my result. It is slower (about 4x) and delivers other results. Why do I post it anyway? I thought it's worth to see how to measure and what's the difference. If - in addition - anybody finds the reason for the different results, I'd be more then happy.  So, here's my solution:  Result: 95.2 \u00b5s \u00b1 3.41 \u00b5s per loop (mean \u00b1 std. dev. of 7 runs, 10000 loops each)  In comparison, your solution is about 4x faster:  delivers: 24.8 \u00b5s \u00b1 1.46 \u00b5s per loop (mean \u00b1 std. dev. of 7 runs, 10000 loops each)  Hi I faced a imilar issue. Here is my idea  The idea is that dot_mat contains all the scalar product between the row vectors. To compute the correlation at different t values you have just to sum the diagonals (of the upper right riangular part), as show in the picture.",
                "tags_post": [
                    "python",
                    "numpy",
                    "statistics",
                    "stochastic-process"
                ],
                "answers": [
                    {
                        "user": "Pierre de Buyl",
                        "date_of_answer": "Feb 18, 2018 at 21:30",
                        "content": "The NumPy routines are for 1D arrays. As a \"minimal\" improvement, use a vectorized operation for the normalisation step (use of np.arange in the before-to-last line):  For larger array sizes, you should consider using the Fourier Transform algorithm for correlation. Check out the examples of the library tidynamics if you are interested in that (disclaimer: I wrote the library, it depends only on NumPy).  For reference, here are the timings for a NumPy-code (that I wrote for testing), your code vector_autocorrelate and tidynamics.  You can see the results:  or plot them  For anything but very small data series, the \"N**2\" algorithm is unusable.",
                        "upvotes": "2"
                    },
                    {
                        "user": "Ferdinando Randisi",
                        "date_of_answer": "Feb 17, 2018 at 19:26",
                        "content": "I'm posting the answer here in case someone else will need it, since it took me quite some time to figure out a viable approach. I ended up solving this by defining the following function  If anybody has a better idea, I would really like to hear that since I think the current one is still not as compact as it should be. It's better than nothing though, which is why I'm posting it here.",
                        "upvotes": "1"
                    },
                    {
                        "user": "jboi",
                        "date_of_answer": "Feb 17, 2018 at 22:38",
                        "content": "Here's my result. It is slower (about 4x) and delivers other results. Why do I post it anyway? I thought it's worth to see how to measure and what's the difference. If - in addition - anybody finds the reason for the different results, I'd be more then happy.  So, here's my solution:  Result: 95.2 \u00b5s \u00b1 3.41 \u00b5s per loop (mean \u00b1 std. dev. of 7 runs, 10000 loops each)  In comparison, your solution is about 4x faster:  delivers: 24.8 \u00b5s \u00b1 1.46 \u00b5s per loop (mean \u00b1 std. dev. of 7 runs, 10000 loops each)",
                        "upvotes": "1"
                    },
                    {
                        "user": "Carlo Valensise",
                        "date_of_answer": "May 6, 2020 at 18:27",
                        "content": "Hi I faced a imilar issue. Here is my idea  The idea is that dot_mat contains all the scalar product between the row vectors. To compute the correlation at different t values you have just to sum the diagonals (of the upper right riangular part), as show in the picture.",
                        "upvotes": "1"
                    }
                ],
                "post_id": "1a7898c8-5209-4090-87d3-524552840037"
            },
            {
                "user": "who-aditya-nawandar",
                "date_post": "Feb 5 at 6:26",
                "title_post": "Flutter - Converting object to an encodable object failed",
                "description_post": "E/flutter ( 8110): [ERROR:flutter/runtime/dart_vm_initializer.cc(41)] Unhandled Exception: Converting object to an encodable object failed: Instance of 'Color'  I keep getting this error  Some other method:  Implementation of colorToHex Function will solve the problem  Try to store color as integer value representing its ARGB format and at time of retrieval again convert to Color object.",
                "tags_post": [
                    "flutter",
                    "dart",
                    "type-conversion"
                ],
                "answers": [
                    {
                        "user": "jatan sanghvi",
                        "date_of_answer": "Feb 5 at 7:30",
                        "content": "Implementation of colorToHex Function will solve the problem",
                        "upvotes": "0"
                    },
                    {
                        "user": "Meet Butani",
                        "date_of_answer": "Feb 5 at 15:15",
                        "content": "Try to store color as integer value representing its ARGB format and at time of retrieval again convert to Color object.",
                        "upvotes": "0"
                    }
                ],
                "post_id": "b40c59bc-a01a-495a-9b3b-6d29673d2b06"
            },
            {
                "user": "rory",
                "date_post": "Jan 31 at 11:33",
                "title_post": "Kentico 13 - How to apply styles for the Froala editor",
                "description_post": "How can I apply styles to the Froala editor in Kentico 13 (v13.0.124)?  I tried setting useClasses to false and confirmed new config was being used but no joy there.  There's a setting in Kentico (CSS stylesheet for WYSIWYG editor) but that only applies to the CkEditor it seems.  Thanks,  Rory  I've created a RichTextEditorConfiguration.js like this:",
                "tags_post": [
                    "kentico",
                    "kentico-13"
                ],
                "answers": [
                    {
                        "user": "Elmar H\u00f6finghoff",
                        "date_of_answer": "Feb 1 at 10:25",
                        "content": "I've created a RichTextEditorConfiguration.js like this:",
                        "upvotes": "0"
                    }
                ],
                "post_id": "82c71dff-4b46-46d9-8e4c-d64a7ec43005"
            },
            {
                "user": "Christian",
                "date_post": "Feb 6 at 8:29",
                "title_post": "Package tsx library into executable",
                "description_post": "I want to package the typescript-runner tsx into an executable so that it is not dependent on nodejs or npm to be ran. How is this possible? I wanted to use vercel/pkg but it seems to have problems with the esm syntax.  you could use nexe  For more CLI options see: nexe --help  Or if you are familiar with docker, you could create a container of your tsx-runner project along with other containers, you could manage the multi container system with docker-compose",
                "tags_post": [
                    "node.js",
                    "typescript",
                    "packaging",
                    "bundling-and-minification",
                    "esbuild"
                ],
                "answers": [
                    {
                        "user": "Yilmaz",
                        "date_of_answer": "Feb 11 at 5:29",
                        "content": "you could use nexe  For more CLI options see: nexe --help  Or if you are familiar with docker, you could create a container of your tsx-runner project along with other containers, you could manage the multi container system with docker-compose",
                        "upvotes": "0"
                    }
                ],
                "post_id": "9daabd6c-7bfb-4414-b6ae-29f9eb59fcc5"
            },
            {
                "user": "avocadoLambda",
                "date_post": "Aug 6, 2021 at 14:50",
                "title_post": "Android Studio on startup: \"Missing essential plugin: org.jetbrains.android. Please reinstall Android Studio from scratch.\"",
                "description_post": "I can't open Android Studio 2020.3.1 Arctic Fox. On Kubuntu 20.04. An error pops up:    So far I have tried:    I use toolbox-app.  UPDATE:  I installed a newer version (Android Studio 2021.1.1 Canary 6) and everything is working fine.  I faced this issue on AndroidStudio2020.3 version on Mac OS and I resolved it by doing these below steps:  On Macbook.  Followed the steps of ChandraGudimetla. Deleting the file did not work.  So I deleted the whole AndroidStudio directory. That worked.  i.e. Go to /Users/username/Library/Application Support/Google/AndroidStudio2020.3. [or whatever version is there]  From Majda post...for my version of AndroidStudio:  rm -r AndroidStudio2020.1  I had two versions Bumble and AndroidStudio4.1. Deleted both directories.  Well, I am a linux user too, Ubuntu user.\nIs their Ubuntu Software or any other Software Store in Kubuntu? If yes, try installing Android Studio from there.  For Windows, the same cleanup is needed, the directory to remove is a bit different C:\\users\\username\\AppData\\Roaming\\Google\\AndroidStudio(whateverversion) or %AppData%\\Roaming\\Google\\AndroidStudio(whateverversion)",
                "tags_post": [
                    "android-studio"
                ],
                "answers": [
                    {
                        "user": "ChanduGudimetla",
                        "date_of_answer": "Aug 12, 2021 at 21:32",
                        "content": "I faced this issue on AndroidStudio2020.3 version on Mac OS and I resolved it by doing these below steps:",
                        "upvotes": "21"
                    },
                    {
                        "user": "Majda",
                        "date_of_answer": "Dec 22, 2021 at 20:42",
                        "content": "",
                        "upvotes": "3"
                    },
                    {
                        "user": "Richylaru",
                        "date_of_answer": "Apr 12, 2022 at 20:40",
                        "content": "On Macbook.  Followed the steps of ChandraGudimetla. Deleting the file did not work.  So I deleted the whole AndroidStudio directory. That worked.  i.e. Go to /Users/username/Library/Application Support/Google/AndroidStudio2020.3. [or whatever version is there]  From Majda post...for my version of AndroidStudio:  rm -r AndroidStudio2020.1  I had two versions Bumble and AndroidStudio4.1. Deleted both directories.",
                        "upvotes": "2"
                    },
                    {
                        "user": "Ubuntu",
                        "date_of_answer": "Aug 8, 2021 at 8:49",
                        "content": "Well, I am a linux user too, Ubuntu user.\nIs their Ubuntu Software or any other Software Store in Kubuntu? If yes, try installing Android Studio from there.",
                        "upvotes": "1"
                    },
                    {
                        "user": "balintn",
                        "date_of_answer": "Jan 26 at 14:43",
                        "content": "For Windows, the same cleanup is needed, the directory to remove is a bit different C:\\users\\username\\AppData\\Roaming\\Google\\AndroidStudio(whateverversion) or %AppData%\\Roaming\\Google\\AndroidStudio(whateverversion)",
                        "upvotes": "1"
                    }
                ],
                "post_id": "1d20b472-1a9c-4804-8611-6ac4f12f8f37"
            },
            {
                "user": "Jay",
                "date_post": "Jan 22 at 15:04",
                "title_post": "Android device (TV) does not detect external USB web cam in Unity",
                "description_post": "We are building an Unity App to an android TV unit and attempting to access a usb webcam inside unity.  The device is able to recognise the camera and display its feed within the builtin camera app. However, when running our unity application (after it asks for camera permissions) the list of available camera devices is empty - both at startup and while the app is running.  We are using WebCamTexture.devices to access the available cameras, but this property is returning an empty list.  Running the same software on an Android phone (same target api and everything) and it all works perfectly - although naturally it detects its built in cameras as there isn't a usb port to connect a usb webcam to it.  What could be the cause of this? As far as I was aware Android TV Os was effectively the same as android, and this should work.  Testing code is equivalent to  Output:  Specs if needed:  Android Launcher Manifest:  Using Unity Native Camera Plugin which is open-source, you can do exactly what you want. Use the Camera.getCameraInfo() API once you download the plugin from github mentioned earlier.",
                "tags_post": [
                    "android",
                    "unity-game-engine",
                    "webcam",
                    "android-tv"
                ],
                "answers": [
                    {
                        "user": "E_net4",
                        "date_of_answer": "yesterday",
                        "content": "Using Unity Native Camera Plugin which is open-source, you can do exactly what you want. Use the Camera.getCameraInfo() API once you download the plugin from github mentioned earlier.",
                        "upvotes": "0"
                    }
                ],
                "post_id": "628d2ee6-fef1-4962-8f7a-21d1f14ca05f"
            },
            {
                "user": "thannen",
                "date_post": "Jan 26 at 20:40",
                "title_post": "running bs4 scraper needs to be redefined to enrich the dataset - some issues",
                "description_post": "got a bs4 scraper that works with selenium - see far below:  well - it works fine so far:  see far below my approach to fetch some data form the given page: clutch.co/il/it-services  To enrich the scraped data, with additional information, i tried to modify the scraping-logic to extract more details from each company's page. Here's i have to an updated version of the code that extracts the company's website and additional information:  here we have script1  ideas to this extended version: well in this code, I added a loop to go through each company's information, extracted the website, and added a placeholder for additional information (in this case, the description). i thougth that i can adapt this loop to extract more data as needed. At least this is the idea.  the working model: i think that the structure of the HTML of course changes here - and therefore in need to adapt the scraping-logik: so i think that i might need to adjust the CSS selectors accordingly based on the current structure of the page. So far so good: Well,i think that we need to make sure to customize the scraping logic based on the specific details we want to extract from each company's page. Conclusio: well i think i am very close: but see what i gotten back: the following  and now - see below my allready working model: my approach to fetch some data form the given page: clutch.co/il/it-services  here we have script2  import pandas as pd  what is aimed: i want to to fetch some more data form the given page: clutch.co/il/it-services - eg the website and so on...  update_: The error AttributeError: 'NoneType' object has no attribute 'get_text' indicates that the .select_one(\".description\") method did not find any HTML element with the class \".description\" for the current company information, resulting in None. Therefore, calling .get_text(strip=True) on None raises an AttributeError.  more to follow... later the day.  update2: note: @jakob had a interesting idea - posted here: Selenium in Google Colab without having to worry about managing the ChromeDriver executable - i tried an example using kora.selenium I made Google-Colab-Selenium to solve this problem. It manages the executable and the required Selenium Options for you. - well that sounds very very interesting - at the moment i cannot imagine that we get selenium working on colab in such a way - that the above mentioned scraper works on colab full and well!? - ideas !? would be awesome:  Jakob: the real issue is that the website you are trying to scrape is using CloudFlare, which can detect selenium. I wrote a little code to scrape the data that you were looking for. You actually don't need to use Selenium as the data is already baked right into the HTML when you go to the webpage.  https://colab.research.google.com/drive/1qkZ1OV_Nqeg13UY3S9pY0IXuB4-q3Mvx?usp=sharing  here we have script3  that said - well i think that i understand the approach - fetching the HTML and then working with xpath the thing i have difficulties is the user-agent .. part  it works awesome - it is just overwhelming...!!!  Change this line:  to this:  This will find the tags that has description in their class, regardless it's a single class name or it's a part of a whole class name.  I'm not an expert in beautifulsoup, I really encourage not using it if you're already dealing with Selenium (selection with selenium is WAY EASIER if you learn XPATH). Anyways, only one modification is needed in your code to work:  It's this line:  should be like this:  You original code had this:  This will try to find an element in the info element you found. There's always a div that has this class: col-md-3 provider-info__description.  COOL! we found the element, but bs4 didn't find it. That's because the .select_one and select functions will split the classes into a list.  So the class we've seen earlier would look like this: ['col-md-3', 'provider-info__description']  If you want to test it yourself, try this code:  This will print all the classes for all div tags it will find. You'll see ['col-md-3', 'provider-info__description'] at the bottom.  I don't know why you're using .select and .select_one, I usually use .find and .find_all (it needs the tag name, and you can specify classes and other attributes instead of a css selector).  So you could either replace all .select to .find_all or you would only replace it in this situation (my solution).  OK, back to the solution. So, let's see the new line of code again:  This line will look for all the div tags that are inside your info element. Then, it'll only select the ones that have description inside their class.  NOTE: if you're confused with the syntax of this part, this is called a Python comprehension. See here.  The join part will combine all the class names in one string, so we don't need to find description as a separate class, but we only wanna know if description is there or not.  This solution should almost always work.  Hope it helps!  well to gather more data from the target page like this https://clutch.co/il/it-services there are several methods available and thinkable. As @Tim Wolfe mentioned above or @eternal_white - interesting food for thoughts - i personally like the xpath-approach.  but first of all: i have to say that this is very interesting: its just a nice and appropiate way to use Selenium in Google Colab Notebooks https://github.com/jpjacobpadilla/Google-Colab-Selenium this is awesome and very nice!  well to gather more data from the target page https://clutch.co/il/it-services, you can consider extracting additional information about each company. Here are some suggestions:  i think you can have a look at serveral parts of the site lemme say e.g. for  a. Services Offered: here you can extract for example the list of services each company provides. well, this piece of information can give you some more insight into their expertise and specialization.  besides this we can have a closer look on other data parts too: for example the  b. Client Reviews/Ratings: sometimes i guess this is not available - but if available, we can scrape client reviews or ratings for each company of those israel-based companies: These kind of data an help to evaluate the reputation and quality of services provided by each of the provided company.  but there is even more: well you can go for...  c. Contact Information: you were able to gather some contact details such as phone numbers, email addresses, or besides this, office addresses for each of the israeli company. These kind of information can be useful for reaching out to potential service providers you find on the list.  furthermore there is even more: eg. the\nd. Company Size: Extract the size of each company, such as the number of employees or annual revenue. well this kind of data can help assess the scale and capacity of the company to handle projects.  last but not least i saw also the  e. Portfolio/Projects: If available, (it is not - as i saw at a first glance) scrape information about the company's past projects or portfolio. With that kind of data you can get insights into their past work and areas of expertise.  well i would do like so: see the enhanced data-logic  with that the scraper tries to gather data about the services offered by each company, client reviews/ratings, and contact information. and there are further options to customize it to extract additional fields based on any further requirements.  and this would look like so:  ... should give you back the following dataset  perhaps some other guys can enhance this a bit more .... there some place for more... i guess...  update: on a sidenote;  btw: the code does not explicitly limit the number of records returned. it allways depents on how the targetpage (your clutchpage) is structured or how the data is being extracted. To ensure that we capture all the relevant data, we can try the following:  Pagination: If the page has pagination (multiple pages of results), we might need to modify the code to iterate through all pages and collect data from each page.  Inspect HTML Structure: Inspect the HTML structure of the page to ensure that the XPath expressions used to extract data are targeting the correct elements. Sometimes, changes in the page structure can affect data extraction.  Debugging: sometimes its necesary to add print statements or use a debugger to inspect intermediate results and identify any issues with data extraction.  Error Handling: sometimes its necesary to have a closer look and to implement error handling to catch any exceptions that might occur during data extraction and logging them for further analysis.  well that said, we can take all these topics into account: here's a general approach to modify the code to handle pagination:  update2 just anoter idea if your willing to gather data from a set of countries - you can go like so:  note: i would add a sleep-time ...  see here  any ideas... !?  The root cause of the error AttributeError: 'NoneType' object has no attribute 'get_text' in your BeautifulSoup and Selenium scraper is that the .select_one(\".description\") method is attempting to find an element with the class .description that does not exist in some of the company sections of the webpage. When no element is found, select_one returns None, and calling .get_text() on None leads to the AttributeError. To fix this, you should add a conditional check to ensure the element exists before attempting to access its text content.",
                "tags_post": [
                    "python",
                    "selenium-webdriver",
                    "web-scraping",
                    "beautifulsoup"
                ],
                "answers": [
                    {
                        "user": "eternal_white",
                        "date_of_answer": "Feb 3 at 8:15",
                        "content": "Change this line:  to this:  This will find the tags that has description in their class, regardless it's a single class name or it's a part of a whole class name.  I'm not an expert in beautifulsoup, I really encourage not using it if you're already dealing with Selenium (selection with selenium is WAY EASIER if you learn XPATH). Anyways, only one modification is needed in your code to work:  It's this line:  should be like this:  You original code had this:  This will try to find an element in the info element you found. There's always a div that has this class: col-md-3 provider-info__description.  COOL! we found the element, but bs4 didn't find it. That's because the .select_one and select functions will split the classes into a list.  So the class we've seen earlier would look like this: ['col-md-3', 'provider-info__description']  If you want to test it yourself, try this code:  This will print all the classes for all div tags it will find. You'll see ['col-md-3', 'provider-info__description'] at the bottom.  I don't know why you're using .select and .select_one, I usually use .find and .find_all (it needs the tag name, and you can specify classes and other attributes instead of a css selector).  So you could either replace all .select to .find_all or you would only replace it in this situation (my solution).  OK, back to the solution. So, let's see the new line of code again:  This line will look for all the div tags that are inside your info element. Then, it'll only select the ones that have description inside their class.  NOTE: if you're confused with the syntax of this part, this is called a Python comprehension. See here.  The join part will combine all the class names in one string, so we don't need to find description as a separate class, but we only wanna know if description is there or not.  This solution should almost always work.  Hope it helps!",
                        "upvotes": "4"
                    },
                    {
                        "user": "lebrochet",
                        "date_of_answer": "Feb 9 at 11:52",
                        "content": "well to gather more data from the target page like this https://clutch.co/il/it-services there are several methods available and thinkable. As @Tim Wolfe mentioned above or @eternal_white - interesting food for thoughts - i personally like the xpath-approach.  but first of all: i have to say that this is very interesting: its just a nice and appropiate way to use Selenium in Google Colab Notebooks https://github.com/jpjacobpadilla/Google-Colab-Selenium this is awesome and very nice!  well to gather more data from the target page https://clutch.co/il/it-services, you can consider extracting additional information about each company. Here are some suggestions:  i think you can have a look at serveral parts of the site lemme say e.g. for  a. Services Offered: here you can extract for example the list of services each company provides. well, this piece of information can give you some more insight into their expertise and specialization.  besides this we can have a closer look on other data parts too: for example the  b. Client Reviews/Ratings: sometimes i guess this is not available - but if available, we can scrape client reviews or ratings for each company of those israel-based companies: These kind of data an help to evaluate the reputation and quality of services provided by each of the provided company.  but there is even more: well you can go for...  c. Contact Information: you were able to gather some contact details such as phone numbers, email addresses, or besides this, office addresses for each of the israeli company. These kind of information can be useful for reaching out to potential service providers you find on the list.  furthermore there is even more: eg. the\nd. Company Size: Extract the size of each company, such as the number of employees or annual revenue. well this kind of data can help assess the scale and capacity of the company to handle projects.  last but not least i saw also the  e. Portfolio/Projects: If available, (it is not - as i saw at a first glance) scrape information about the company's past projects or portfolio. With that kind of data you can get insights into their past work and areas of expertise.  well i would do like so: see the enhanced data-logic  with that the scraper tries to gather data about the services offered by each company, client reviews/ratings, and contact information. and there are further options to customize it to extract additional fields based on any further requirements.  and this would look like so:  ... should give you back the following dataset  perhaps some other guys can enhance this a bit more .... there some place for more... i guess...  update: on a sidenote;  btw: the code does not explicitly limit the number of records returned. it allways depents on how the targetpage (your clutchpage) is structured or how the data is being extracted. To ensure that we capture all the relevant data, we can try the following:  Pagination: If the page has pagination (multiple pages of results), we might need to modify the code to iterate through all pages and collect data from each page.  Inspect HTML Structure: Inspect the HTML structure of the page to ensure that the XPath expressions used to extract data are targeting the correct elements. Sometimes, changes in the page structure can affect data extraction.  Debugging: sometimes its necesary to add print statements or use a debugger to inspect intermediate results and identify any issues with data extraction.  Error Handling: sometimes its necesary to have a closer look and to implement error handling to catch any exceptions that might occur during data extraction and logging them for further analysis.  well that said, we can take all these topics into account: here's a general approach to modify the code to handle pagination:  update2 just anoter idea if your willing to gather data from a set of countries - you can go like so:  note: i would add a sleep-time ...  see here  any ideas... !?",
                        "upvotes": "2"
                    },
                    {
                        "user": "Tim Wolfe",
                        "date_of_answer": "Feb 2 at 2:35",
                        "content": "The root cause of the error AttributeError: 'NoneType' object has no attribute 'get_text' in your BeautifulSoup and Selenium scraper is that the .select_one(\".description\") method is attempting to find an element with the class .description that does not exist in some of the company sections of the webpage. When no element is found, select_one returns None, and calling .get_text() on None leads to the AttributeError. To fix this, you should add a conditional check to ensure the element exists before attempting to access its text content.",
                        "upvotes": "-1"
                    }
                ],
                "post_id": "f85f31d1-1908-45af-b513-8762a2343253"
            },
            {
                "user": "Pyi Soe",
                "date_post": "Feb 6 at 3:19",
                "title_post": "How to change the behavior of an Electron app via external JavaScript file?",
                "description_post": "This is the project structure I would like to have.    kareljs folder is an Electron app and if I run  npm start  inside that folder, a window pop up and run method of karel.js is executed when the button Run Karel is clicked.  ./eg01/hello_karel.js, ./eg02/pick_newspaper.js etc., are where I program Karel using the methods provided by ./kareljs/karel/karel.js module. Running the program must bring up the same window above, but when Run Karel button clicked, the run method in these Karel program files should be called, instead of the default one. (What I need is sort of method overriding in Java. Here I override run method via new js file).  And to run the program, I should just be able to  node ./eg01/hello_karel.js  Or  node hello_karel.js  if I am in eg01 folder. Ideally, no config file should be required to run these programs. I mean inside eg01, eg02 folders. Of course, Karel is for newbies, and for them, the simpler the better it is.  What are the possible mechanisms to achieve my requirements?  Code:  index.html  package.json  Also have GitHub repository here.  Update: I can now start the app just by running  Still need to figure out how to change the behavior of the run method which is called via the button click. (Please see the update in karel.js above.)  Using IPC to pass function references from the main process to the renderer? Something like this:        ",
                "tags_post": [
                    "javascript",
                    "node.js",
                    "npm",
                    "electron"
                ],
                "answers": [
                    {
                        "user": "normalcepalin",
                        "date_of_answer": "Feb 9 at 10:40",
                        "content": "Using IPC to pass function references from the main process to the renderer? Something like this:        ",
                        "upvotes": "0"
                    }
                ],
                "post_id": "75b5937c-280b-4b1f-8126-f3c2c74c77e0"
            },
            {
                "user": "malat",
                "date_post": "Feb 6 at 13:37",
                "title_post": "How to integrate CTest with Visual Studio?",
                "description_post": "I have been following the guide from:  However I fail to understand how to integrate the ctest mechanism in Visual Studio 2019. Right now my shared library (dll) is not found upon execution (only on Windows):    Here is the simple project setup:  And then src is simply:  finally tests is:  Running the above under WSL works as expected:  As of CMake 3.27, you should use the TARGET_RUNTIME_DLL_DIRS generator expression, along with the ENVIRONMENT_MODIFICATION test property to set up your tests for running, rather than by copying the DLLs anywhere.  To do this, simply add the following code to your tests\\CMakeLists.txt file:  On non-DLL platforms, this will do nothing, as intended. On those platforms, RPATH takes over.  This improves on Corristo's answer by not requiring updates when you add dependencies to your tests. It also works with IMPORTED targets. It also avoids issues with setting CMAKE_RUNTIME_OUTPUT_DIRECTORY in FetchContent scenarios.  In contrast to Linux where additional search paths for libraries can be embedded into an executable (via RPATH or RUNPATH), on Windows the only places the loader looks for .dll files is next to the executable, in directories in the PATH environment variable and in C:\\System32.  So in order for the test executable to find foo.dll you either need to ensure that they are located in the same directory, or add the directory the library is in to the PATH when running the tests.  You can have CMake put them into the same directory by setting the RUNTIME_OUTPUT_DIRECTORY property, which is initialized to the value of the CMAKE_RUNTIME_OUTPUT_DIRECTORY variable. If you set that variable before the first target is defined then both the .dll and the .exe will end up in the same directory. For example, you can add  to the top-level CMakeLists.txt file before the add_subdirectory (\"src\") call.  Alternatively, you can modify the PATH variable when running the tests. This can also be necessary if your test depends on libraries that aren't built by your project, where setting CMAKE_RUNTIME_OUTPUT_DIRECTORY alone won't be sufficient. To do so, with CMake 3.22 and later you can set the ENVIRONMENT_MODIFICATION property on the test after the add_test call:  A modern approach to this issue seems to TARGET_RUNTIME_DLLS:  Documentation suggest to use:  Watch out that the -t flag which seems to have been introduced lately.  Reference:  When using Visual Studio 2019, you may need to change the default cmake version used:",
                "tags_post": [
                    "visual-c++",
                    "cmake",
                    "dll",
                    "ctest"
                ],
                "answers": [
                    {
                        "user": "Alex Reinking",
                        "date_of_answer": "23 hours ago",
                        "content": "As of CMake 3.27, you should use the TARGET_RUNTIME_DLL_DIRS generator expression, along with the ENVIRONMENT_MODIFICATION test property to set up your tests for running, rather than by copying the DLLs anywhere.  To do this, simply add the following code to your tests\\CMakeLists.txt file:  On non-DLL platforms, this will do nothing, as intended. On those platforms, RPATH takes over.  This improves on Corristo's answer by not requiring updates when you add dependencies to your tests. It also works with IMPORTED targets. It also avoids issues with setting CMAKE_RUNTIME_OUTPUT_DIRECTORY in FetchContent scenarios.",
                        "upvotes": "0"
                    },
                    {
                        "user": "Corristo",
                        "date_of_answer": "Feb 9 at 2:10",
                        "content": "In contrast to Linux where additional search paths for libraries can be embedded into an executable (via RPATH or RUNPATH), on Windows the only places the loader looks for .dll files is next to the executable, in directories in the PATH environment variable and in C:\\System32.  So in order for the test executable to find foo.dll you either need to ensure that they are located in the same directory, or add the directory the library is in to the PATH when running the tests.  You can have CMake put them into the same directory by setting the RUNTIME_OUTPUT_DIRECTORY property, which is initialized to the value of the CMAKE_RUNTIME_OUTPUT_DIRECTORY variable. If you set that variable before the first target is defined then both the .dll and the .exe will end up in the same directory. For example, you can add  to the top-level CMakeLists.txt file before the add_subdirectory (\"src\") call.  Alternatively, you can modify the PATH variable when running the tests. This can also be necessary if your test depends on libraries that aren't built by your project, where setting CMAKE_RUNTIME_OUTPUT_DIRECTORY alone won't be sufficient. To do so, with CMake 3.22 and later you can set the ENVIRONMENT_MODIFICATION property on the test after the add_test call:",
                        "upvotes": "-1"
                    },
                    {
                        "user": "malat",
                        "date_of_answer": "2 days ago",
                        "content": "A modern approach to this issue seems to TARGET_RUNTIME_DLLS:  Documentation suggest to use:  Watch out that the -t flag which seems to have been introduced lately.  Reference:  When using Visual Studio 2019, you may need to change the default cmake version used:",
                        "upvotes": "-1"
                    }
                ],
                "post_id": "710f2f35-1459-4a3f-964a-fc8d655c46a2"
            },
            {
                "user": "malat",
                "date_post": "Feb 6 at 14:50",
                "title_post": "vcpkg: classic vs manifest mode",
                "description_post": "I am trying to understand how to use the classic mode of vcpkg (Visual Studio BuildTools 2022 + standalone installation).  I've used DCMTK as reference cmake project. Since it does not contains a vcpkg.json I added one:  Followed by:  I can see in my gitlab output:  Now I change into:  I now see:  What did I misunderstood from the classic mode documentation ? What step am I missing so that it behave as the manifest mode.  In manifest mode, dependencies are managed automatically by vcpkg based on the vcpkg.json manifest file present in your project directory. When you invoke CMake, it uses this file to resolve and install dependencies before the build starts.  In classic mode, dependencies must be installed manually using the vcpkg install command before you invoke CMake. The installed packages are then found by CMake based on the configuration provided by vcpkg's toolchain file.<>  In your first scenario (manifest mode), you had a vcpkg.json in your project, and you enabled manifest mode with -DVCPKG_MANIFEST_MODE=ON. That allowed vcpkg to automatically manage libpng for you.  In your second scenario (classic mode), you removed the vcpkg.json and used vcpkg install libpng to manually install the package. However, you also used -DVCPKG_MANIFEST_MODE=OFF which is unnecessary because classic mode is the default behavior when no vcpkg.json is found.  To make sure libpng is found in classic mode, make sure that:  If after these steps libpng is still not found, it could be due to:  Example for classic Mode:  Double-check vcpkg install is executed in the same environment where your CMake build will run so that it uses the same triplet and paths are correctly resolved.  The documentation is rather evasive:  It does not describe case where it fails to detect an appropriate default...which seems to be my case here.  Solution is simply:  For reference:  I was able to diagnose the failure to find png using the debug mode of cmake cmake --debug-find:  Excerpt:",
                "tags_post": [
                    "cmake",
                    "vcpkg"
                ],
                "answers": [
                    {
                        "user": "malat",
                        "date_of_answer": "Feb 9 at 12:41",
                        "content": "In manifest mode, dependencies are managed automatically by vcpkg based on the vcpkg.json manifest file present in your project directory. When you invoke CMake, it uses this file to resolve and install dependencies before the build starts.  In classic mode, dependencies must be installed manually using the vcpkg install command before you invoke CMake. The installed packages are then found by CMake based on the configuration provided by vcpkg's toolchain file.<>  In your first scenario (manifest mode), you had a vcpkg.json in your project, and you enabled manifest mode with -DVCPKG_MANIFEST_MODE=ON. That allowed vcpkg to automatically manage libpng for you.  In your second scenario (classic mode), you removed the vcpkg.json and used vcpkg install libpng to manually install the package. However, you also used -DVCPKG_MANIFEST_MODE=OFF which is unnecessary because classic mode is the default behavior when no vcpkg.json is found.  To make sure libpng is found in classic mode, make sure that:  If after these steps libpng is still not found, it could be due to:  Example for classic Mode:  Double-check vcpkg install is executed in the same environment where your CMake build will run so that it uses the same triplet and paths are correctly resolved.",
                        "upvotes": "1"
                    },
                    {
                        "user": "malat",
                        "date_of_answer": "Feb 9 at 16:26",
                        "content": "The documentation is rather evasive:  It does not describe case where it fails to detect an appropriate default...which seems to be my case here.  Solution is simply:  For reference:  I was able to diagnose the failure to find png using the debug mode of cmake cmake --debug-find:  Excerpt:",
                        "upvotes": "1"
                    }
                ],
                "post_id": "15d93195-0c3f-48ad-8ea3-dd669c9703d0"
            },
            {
                "user": "n9p4",
                "date_post": "Feb 6 at 14:22",
                "title_post": "Mixed Content the error Mixed Content: The page at {https://frontend_page} was loaded over HTTPS, but requested an insecure frame {http:keycloak}",
                "description_post": "I have transferred the frontend using React to a domain with SSL and I want to use Keycloak on HTTP.  Both before when they were on localhost it was okay, now I face an error of mixed content, I tried everything but does not work, now keycloak and frontend have different domains, and they run on different protocols.  Frontend(HTTPs), Keycloak (HTTP). I am using on frontend: keycloak-js\": \"^21.0.1  Keycloak version is the latest version pulled from the docker image from jboss/keycloak.  Full error:  Also when I run the container, with these env variables:  This is the NGINX config:  Ideally, you would need to configure Keycloak to be served over HTTPS. If Keycloak is running in a Docker container and you are unable to configure SSL directly, you can use a reverse proxy like NGINX to serve Keycloak over HTTPS.  Obtain an SSL certificate for your Keycloak domain. You can use Certbot (Let's Encrypt) or any other certificate authority. Then configure NGINX to reverse proxy to Keycloak over HTTPS:  And restart NGINX to apply changes (sudo systemctl restart nginx).  Make sure that Keycloak is aware it is being served over a proxy:  From this answer, for Keycloak versions 18.x and later, the use of web-context for setting a custom base URL is deprecated. You now have the --http-relative-path argument (or KC_HTTP_RELATIVE_PATH environment variable in Docker) for specifying the path relative to the root (/).  So you should add (for recent version of Keycloak) to your docker-compose.yml  Or add to your docker run command -e KC_HTTP_RELATIVE_PATH=/keycloak  That would make sure Keycloak generates URLs (for redirects, service calls, etc.) that correctly reflect the proxy path, helping in the resolution of path-related issues when accessed through a reverse proxy setup.  Finally, update the Keycloak initialization in your frontend code to point to the HTTPS URL of Keycloak. If you serve Keycloak and your frontend from different domains, make sure CORS settings are correctly configured in Keycloak to allow requests from your frontend domain.",
                "tags_post": [
                    "reactjs",
                    "http",
                    "https",
                    "frontend",
                    "keycloak"
                ],
                "answers": [
                    {
                        "user": "VonC",
                        "date_of_answer": "Feb 9 at 11:54",
                        "content": "Ideally, you would need to configure Keycloak to be served over HTTPS. If Keycloak is running in a Docker container and you are unable to configure SSL directly, you can use a reverse proxy like NGINX to serve Keycloak over HTTPS.  Obtain an SSL certificate for your Keycloak domain. You can use Certbot (Let's Encrypt) or any other certificate authority. Then configure NGINX to reverse proxy to Keycloak over HTTPS:  And restart NGINX to apply changes (sudo systemctl restart nginx).  Make sure that Keycloak is aware it is being served over a proxy:  From this answer, for Keycloak versions 18.x and later, the use of web-context for setting a custom base URL is deprecated. You now have the --http-relative-path argument (or KC_HTTP_RELATIVE_PATH environment variable in Docker) for specifying the path relative to the root (/).  So you should add (for recent version of Keycloak) to your docker-compose.yml  Or add to your docker run command -e KC_HTTP_RELATIVE_PATH=/keycloak  That would make sure Keycloak generates URLs (for redirects, service calls, etc.) that correctly reflect the proxy path, helping in the resolution of path-related issues when accessed through a reverse proxy setup.  Finally, update the Keycloak initialization in your frontend code to point to the HTTPS URL of Keycloak. If you serve Keycloak and your frontend from different domains, make sure CORS settings are correctly configured in Keycloak to allow requests from your frontend domain.",
                        "upvotes": "0"
                    }
                ],
                "post_id": "8cef44e3-c046-4d6f-ac6e-0172dd3668ba"
            },
            {
                "user": "mocax",
                "date_post": "Apr 11, 2017 at 7:48",
                "title_post": "How to detect if current window is behind another window, using Javascript",
                "description_post": "Is it possible to detect whether the web browser window is currently covered by another window?  document.hidden and document.visibilityState only changes state on switching tabs or when the entire window is minimized.  document.hasFocus() returns false if the window is visible but not in focus (e.g. the focus is on the taskbar)  Nope, that's not possible.  There's no way in JavaScript to know how visible the window is.  Browser windows overlapping one another, the position of the browser windows, and which one of them is on top - these functionalities are handled by the operating system.  No matter what code you write for your webpage, you cannot tell if your browser window is overlapped by another.  So yeah, the answer is NO.  It's been a while since the OP, but for me the Page Visiblity API does appear to allow you to event off of another application's window covering the browser window, at least in Firefox on Windows 11.  To test:  It is very possible if your website runs as one website. By using Window Focus and Blur events.  Note: this is expecting that all code is executed in the same frame as the snippet below is executed in an iframe which behaves as if it was in a separate window!    ",
                "tags_post": [
                    "javascript",
                    "dom"
                ],
                "answers": [
                    {
                        "user": "Cerbrus",
                        "date_of_answer": "Apr 11, 2017 at 7:49",
                        "content": "Nope, that's not possible.  There's no way in JavaScript to know how visible the window is.",
                        "upvotes": "2"
                    },
                    {
                        "user": "nashcheez",
                        "date_of_answer": "Apr 11, 2017 at 7:58",
                        "content": "Browser windows overlapping one another, the position of the browser windows, and which one of them is on top - these functionalities are handled by the operating system.  No matter what code you write for your webpage, you cannot tell if your browser window is overlapped by another.  So yeah, the answer is NO.",
                        "upvotes": "2"
                    },
                    {
                        "user": "xdhmoore",
                        "date_of_answer": "Feb 9 at 6:10",
                        "content": "It's been a while since the OP, but for me the Page Visiblity API does appear to allow you to event off of another application's window covering the browser window, at least in Firefox on Windows 11.  To test:",
                        "upvotes": "1"
                    },
                    {
                        "user": "TomDK",
                        "date_of_answer": "Oct 10, 2023 at 5:39",
                        "content": "It is very possible if your website runs as one website. By using Window Focus and Blur events.  Note: this is expecting that all code is executed in the same frame as the snippet below is executed in an iframe which behaves as if it was in a separate window!    ",
                        "upvotes": "0"
                    }
                ],
                "post_id": "60ad66f5-f27a-41d8-bc4e-f7497ffedafc"
            },
            {
                "user": "David Fontes",
                "date_post": "Feb 6 at 12:26",
                "title_post": "I18n Get correct language code in baseHref with firebase hosting and Angular",
                "description_post": "In my angular project I have set up i18n for \"sv\"(swedish) and \"en\".  What I want is to when accessing mypage.com, \"/sv\" or \"/en\" to be added to baseHref so that correct index.html is loaded from firebase hosting based of \"accept-language\" in other words users for sweden will get \"mypage.com/sv\" and everybody else mypage.com/en would be the one to load.  I made some digging and it seems that this is nothing that comes automaticly with firebase hositng and some logic has to be added eaither in angular or firebase functions.  Adding logic in angular failed totaly(keep in mind that I want it to happen automaticly and not something that user picks in a dropdown)  ...and logic for firebase functions although it's working on the simplest level it messing up with my routing (adding alot of \"/sv\" to path when it should not + it feels like a fix). bellow code for this fix:  my firebase.json: for above solution:  and for set up without any firebaseFunctions fix (when following docs):  What is the correct way to handle?  you may want to take a look at this firebase hosting i18n configuration.  https://firebase.google.com/docs/hosting/i18n-rewrites  To solve the problem that you are having, you need to implement on the Angular side and on the serving side.  So, on the Angular side, you need to build the application using a base href, which can be done in multiple ways, but the one that suits your problem the best, is using the CLI build options.  You should specify the appropriate base href for each build. Since you are using multiple builds for i18n, this static approach works perfectly for your use case.  On the Firebase side (never used Firebase hosting, so adjust accordingly), you need to perform a rewrite (routing), which can be achieved using the Firebase cloud functions, but Firebase already offers you a built-in way to serve different i18n builds as mentioned on a different answer. On the documentation, they specify that they use the Accept-Language header to detect the language, which is exactly what you want.  In your firebase.json file, add the following configuration:  Create a localized-files directory in the path specified in the firebase.json file, then create 1 directory for each language that you want to serve (en_ALL and sv_ALL) and inside, add your different builds.  Ref: https://firebase.google.com/docs/hosting/i18n-rewrites#set-up-i18n-rewrites  Side note on why your function was misbehaving. You are always prepending the language code, even when it is already in the request URL. You have 2 possible solutions:  Solution 1 seems more appropriate, so you could just update your rewrite configuration to:",
                "tags_post": [
                    "angular",
                    "firebase",
                    "internationalization",
                    "angularfire2",
                    "firebase-hosting"
                ],
                "answers": [
                    {
                        "user": "Seungyeol Baek",
                        "date_of_answer": "yesterday",
                        "content": "you may want to take a look at this firebase hosting i18n configuration.  https://firebase.google.com/docs/hosting/i18n-rewrites",
                        "upvotes": "0"
                    },
                    {
                        "user": "David Fontes",
                        "date_of_answer": "yesterday",
                        "content": "To solve the problem that you are having, you need to implement on the Angular side and on the serving side.  So, on the Angular side, you need to build the application using a base href, which can be done in multiple ways, but the one that suits your problem the best, is using the CLI build options.  You should specify the appropriate base href for each build. Since you are using multiple builds for i18n, this static approach works perfectly for your use case.  On the Firebase side (never used Firebase hosting, so adjust accordingly), you need to perform a rewrite (routing), which can be achieved using the Firebase cloud functions, but Firebase already offers you a built-in way to serve different i18n builds as mentioned on a different answer. On the documentation, they specify that they use the Accept-Language header to detect the language, which is exactly what you want.  In your firebase.json file, add the following configuration:  Create a localized-files directory in the path specified in the firebase.json file, then create 1 directory for each language that you want to serve (en_ALL and sv_ALL) and inside, add your different builds.  Ref: https://firebase.google.com/docs/hosting/i18n-rewrites#set-up-i18n-rewrites  Side note on why your function was misbehaving. You are always prepending the language code, even when it is already in the request URL. You have 2 possible solutions:  Solution 1 seems more appropriate, so you could just update your rewrite configuration to:",
                        "upvotes": "0"
                    }
                ],
                "post_id": "1d6734f1-6a70-4c03-9576-b694d18df494"
            },
            {
                "user": "marc_s",
                "date_post": "Feb 4 at 13:53",
                "title_post": "Reuse host for Integration testing in a .NET 8 console app",
                "description_post": "I have a .NET 8 console app that I configure the following way:  Program.cs:  How can I reuse this host in my integration test project, but override parts of the service configuration, update environment name etc? What I'm after is what Microsoft does in their integration tests for web apps:  Pseudo code of what I'm after:  For a console application, you'll have to do the groundworks yourself.  That starts with making the Program class that gets auto generated by top-level statements accessible to the test project; by default that auto generated one is internal.  One way to do so is via the \"public partial class approach\" mentioned in the document you pointed to. Alternatively, you can also switch completely to the old program style.  Define a public (static) partial class Program in your Program.cs file, having a public static method - e.g. CreateApplicationBuilder - that sets up the HostApplicationBuilder.\nYou use this method in both the actual console application and in the test.  Program.cs  In the setup method of your test you call that CreateApplicationBuilder method on Program to access the builder and to make customizations like replacing services that are already registered and adjusting the environment.  MyTest.cs  How the initial setup and cleanup needs to be done, depends on the testing framework you use.  xUnit has e.g. the concept of various fixtures.\nA class fixture approach, where the fixture (and thereby also the IHost) is being shared with all test methods in the same test class (here: MyTest), can look like below.  Construct your host in a flexible way, by creating a custom host builder method for your method or class for your tests. This mimics your Program.cs setup but with extension points.  Custom Host Builder:  In your integration tests just utilize this custom host builder to either override services or specify the environment name. To tailor the use of the CreateCustomHost method you could pass a lambda function that adjusts the host builder according your test requirements.  Customized Host:  From my point of view, you can create a custom host factory for your tests  with this factory you can create a new host for your tests  and if you wanna use it, this is an example for it",
                "tags_post": [
                    "c#",
                    ".net-core",
                    ".net-8.0"
                ],
                "answers": [
                    {
                        "user": "pfx",
                        "date_of_answer": "Feb 10 at 22:19",
                        "content": "For a console application, you'll have to do the groundworks yourself.  That starts with making the Program class that gets auto generated by top-level statements accessible to the test project; by default that auto generated one is internal.  One way to do so is via the \"public partial class approach\" mentioned in the document you pointed to. Alternatively, you can also switch completely to the old program style.  Define a public (static) partial class Program in your Program.cs file, having a public static method - e.g. CreateApplicationBuilder - that sets up the HostApplicationBuilder.\nYou use this method in both the actual console application and in the test.  Program.cs  In the setup method of your test you call that CreateApplicationBuilder method on Program to access the builder and to make customizations like replacing services that are already registered and adjusting the environment.  MyTest.cs  How the initial setup and cleanup needs to be done, depends on the testing framework you use.  xUnit has e.g. the concept of various fixtures.\nA class fixture approach, where the fixture (and thereby also the IHost) is being shared with all test methods in the same test class (here: MyTest), can look like below.",
                        "upvotes": "1"
                    },
                    {
                        "user": "AztecCodes",
                        "date_of_answer": "Feb 10 at 17:20",
                        "content": "Construct your host in a flexible way, by creating a custom host builder method for your method or class for your tests. This mimics your Program.cs setup but with extension points.  Custom Host Builder:  In your integration tests just utilize this custom host builder to either override services or specify the environment name. To tailor the use of the CreateCustomHost method you could pass a lambda function that adjusts the host builder according your test requirements.  Customized Host:",
                        "upvotes": "0"
                    },
                    {
                        "user": "Nima Airyana",
                        "date_of_answer": "yesterday",
                        "content": "From my point of view, you can create a custom host factory for your tests  with this factory you can create a new host for your tests  and if you wanna use it, this is an example for it",
                        "upvotes": "0"
                    }
                ],
                "post_id": "733fabad-4047-44f5-984a-b3a31d3ff47b"
            },
            {
                "user": "Grim",
                "date_post": "Feb 8 at 13:45",
                "title_post": "Expo gradle build failed",
                "description_post": "I do an Android Play Store build. Unfortunately it does not work.  This is the output  Any ideas?  Could not set unknown property 'classifier' for task ':expo-application:androidSourcesJar' of type org.gradle.api.tasks.bundling.Jar.  Check first if this is related to expo/expo issue 26560  Instead of:  Use:  This is also illustrated in issue 23023.  But you could fork the necessary Expo repository, apply the fix, and use your forked version as a dependency. That would allow you to control updates and apply fixes as needed without waiting for the upstream repository to incorporate your changes.  Or: use a post-install script in your project to apply patches automatically after npm/yarn installations. Tools like patch-package can help you maintain your changes across package updates without directly modifying node_modules.  As a temporary workaround, consider using an earlier version of Gradle that does not have this issue  True, eas build being a hosted service for building app binaries for your Expo and React Native projects, it would not work with an Expo fork.  And app.json (which contains configuration options for the project) does not provide a direct way to modify the Gradle version or apply a patch to the Expo modules.  That means the current version of Expo would not support yuor use case, not until that issue is resolved on Expo's side.",
                "tags_post": [
                    "android",
                    "react-native",
                    "gradle",
                    "expo",
                    "eas"
                ],
                "answers": [
                    {
                        "user": "VonC",
                        "date_of_answer": "Feb 11 at 17:58",
                        "content": "Could not set unknown property 'classifier' for task ':expo-application:androidSourcesJar' of type org.gradle.api.tasks.bundling.Jar.  Check first if this is related to expo/expo issue 26560  Instead of:  Use:  This is also illustrated in issue 23023.  But you could fork the necessary Expo repository, apply the fix, and use your forked version as a dependency. That would allow you to control updates and apply fixes as needed without waiting for the upstream repository to incorporate your changes.  Or: use a post-install script in your project to apply patches automatically after npm/yarn installations. Tools like patch-package can help you maintain your changes across package updates without directly modifying node_modules.  As a temporary workaround, consider using an earlier version of Gradle that does not have this issue  True, eas build being a hosted service for building app binaries for your Expo and React Native projects, it would not work with an Expo fork.  And app.json (which contains configuration options for the project) does not provide a direct way to modify the Gradle version or apply a patch to the Expo modules.  That means the current version of Expo would not support yuor use case, not until that issue is resolved on Expo's side.",
                        "upvotes": "1"
                    }
                ],
                "post_id": "a6a8b0ef-9fbb-4638-83c4-e28203d920b8"
            },
            {
                "user": "zakdances",
                "date_post": "Feb 5 at 4:58",
                "title_post": "\"Invalid call\" when trying to dynamically import local SVG in React Native",
                "description_post": "I'm trying to dynamically import local SVG files with Suspense and lazy in React Native (v0.72.3). But I'm getting this error:  Here is my code:  What am I doing wrong here and how can I fix it?  The React Native doesn't support SVG syntax or file directly. So to fix this you must follow the installation guide:  Then inside your project components, you can write like the following:  It does work, if you need to make a dynamic one, you should pre-import them and write like the following:",
                "tags_post": [
                    "react-native",
                    "svg",
                    "import"
                ],
                "answers": [
                    {
                        "user": "AmerllicA",
                        "date_of_answer": "2 days ago",
                        "content": "The React Native doesn't support SVG syntax or file directly. So to fix this you must follow the installation guide:  Then inside your project components, you can write like the following:  It does work, if you need to make a dynamic one, you should pre-import them and write like the following:",
                        "upvotes": "0"
                    }
                ],
                "post_id": "838f63d6-8b6f-4f15-b9bf-60f6ffb634a5"
            },
            {
                "user": "Some programmer dude",
                "date_post": "Feb 9 at 21:11",
                "title_post": "Using WinForms in JetBrains Rider on Linux",
                "description_post": "While I can compile WinForms applications using Mono on the command-line, it's not possible in Rider.  It's okay that there's no solution/project template available, or the designer, that doesn't matter much. But I can't even use System.Windows.Forms when writing the code myself.  Is there some way to tell Rider to use the installed WinForms library?  The simple code I try to build:  Build output (from Rider):  And Rider itself doesn't recognize it either:  This is how I managed to get it to work:",
                "tags_post": [
                    "c#",
                    "linux",
                    "winforms",
                    "jetbrains-rider"
                ],
                "answers": [
                    {
                        "user": "Some programmer dude",
                        "date_of_answer": "2 days ago",
                        "content": "This is how I managed to get it to work:",
                        "upvotes": "1"
                    }
                ],
                "post_id": "4c735c62-1355-4c97-ab57-b1772cfa7a36"
            },
            {
                "user": "Nane",
                "date_post": "Dec 30, 2023 at 17:07",
                "title_post": "How to remove the dock icon on Mac Tauri?",
                "description_post": "I am trying to remove the dock icon, close the window, and let the app run in the background using Tauri.  I am able to close the window, but I don't know how to remove the app icon after the window is closed.  Update:  I tried the provided answer  It works, but this has the side effect of the app not being able to be opened from the spotlight search.  Tauri doesn't seem to support setting the activation policy after startup, but you can set it yourself at runtime (see the comments and edits to this answer) by calling the AppKit API using the cocoa crate:  Inserting this immediately after the call to api.prevent_exit() causes the window to close and the dock icon to disappear, but the program continues running.  It's worth noting that Tauri doesn't expect you to do this, so it may cause other unexpected behavior -- it might be difficult to restore the window state later on, for example.",
                "tags_post": [
                    "macos",
                    "rust",
                    "tauri"
                ],
                "answers": [
                    {
                        "user": "Mac O'Brien",
                        "date_of_answer": "Dec 30, 2023 at 20:55",
                        "content": "Tauri doesn't seem to support setting the activation policy after startup, but you can set it yourself at runtime (see the comments and edits to this answer) by calling the AppKit API using the cocoa crate:  Inserting this immediately after the call to api.prevent_exit() causes the window to close and the dock icon to disappear, but the program continues running.  It's worth noting that Tauri doesn't expect you to do this, so it may cause other unexpected behavior -- it might be difficult to restore the window state later on, for example.",
                        "upvotes": "1"
                    }
                ],
                "post_id": "0b320ea4-cf88-4d63-a8c8-7aa2a762673d"
            },
            {
                "user": "Willis Blackburn",
                "date_post": "Sep 4, 2023 at 14:22",
                "title_post": "In Visual Studio Code, is there any way to \"Accept Combination\" automatically?",
                "description_post": "I'm using Visual Studio Code with Git.  I've noticed that whenever I have a merge conflict, and the \"Accept Combination\" resolution is available, is available, it always does the correct and obvious thing.  Is there any way to just make it happen by default, so it doesn't even bother me with merge \"conflicts\" that can be resolved by \"Accept Combination?\"  Q1 2024: still no.  That \"Accept Combination\" option comes from PR 173035, for VSCode 1.76.0, Feb. 2023.  But since then:  The closest to automating that process is issue 165685:  But that is not your use case.  The asker raised issue ticket https://github.com/microsoft/vscode/issues/205073, where a maintainer confirmed that currently this doesn't exist, but they're open to have a command that auto-merges all changes that can be auto-merged that way.  There is a related command with ID merge-conflict.accept.all-both and name Merge Conflict: Accept All Both. Related source code starts here. As for the feature you refer to in your question post, the source code for that is here. But they're not the same thing.",
                "tags_post": [
                    "git",
                    "visual-studio-code"
                ],
                "answers": [
                    {
                        "user": "VonC",
                        "date_of_answer": "yesterday",
                        "content": "Q1 2024: still no.  That \"Accept Combination\" option comes from PR 173035, for VSCode 1.76.0, Feb. 2023.  But since then:  The closest to automating that process is issue 165685:  But that is not your use case.",
                        "upvotes": "1"
                    },
                    {
                        "user": "starball",
                        "date_of_answer": "20 hours ago",
                        "content": "The asker raised issue ticket https://github.com/microsoft/vscode/issues/205073, where a maintainer confirmed that currently this doesn't exist, but they're open to have a command that auto-merges all changes that can be auto-merged that way.  There is a related command with ID merge-conflict.accept.all-both and name Merge Conflict: Accept All Both. Related source code starts here. As for the feature you refer to in your question post, the source code for that is here. But they're not the same thing.",
                        "upvotes": "0"
                    }
                ],
                "post_id": "69bc0a6a-921d-4390-99db-8f9197609b58"
            },
            {
                "user": "rablentain",
                "date_post": "Feb 10 at 7:55",
                "title_post": "How to implement EKF (Extended Kalman filter) for INS GPS sensor fusion in a mobile application?",
                "description_post": "I have found a lot of resources describing the theory and general alorithm for an (extended) Kalman filter but I find it hard to translate to the use case of GPS smoothing in a mobile app, which is what I want to do. I even found this library which seems promising but I am not sure how to insert my variables into that.  I have longitude, latitude, altitude (not sure that I need that) and speed from the gps. And also the INS input (accelerometer, gyroscope, magnetometer) to work with.  How do I use all there inputs with the library?  I have these inputs available in Expo:  From these I can get x,y,z-values every 200ms for instance. I also have expo-location which gives me latitude, longitude, speed and timestamp every 1 second.  So I have all these variables and I want to use all of them to improve the performance of the gps when recording the path of a pedestrian who is out walking. The purpose is to paint the path onto a map as accurate as possible.  The result from the extended kalman filter should be improved gps latitude and longitude.  I understand that I can initiate a kalman filter using the library like this to make it behave as an extended kalman filter:  Each return should return a matrix. I think that I should use all my given variables in a matrix which should be something like  Something like this is my stateProjection right? Not sure about the others. What am I missing to connect my inputs with the properties of this library?  (This wouldn't fit as a comment, so posting as an answer)  Just for some context: what you are trying to do is really hard. I regularly see research papers about it, and big companies pay their engineers a lot of money to get systems like this working. INS inputs are challenging because of the biases inherent in those types of sensors. In addition to having states in your Kalman Filter for corrected GPS position, you will also need states for accelerometer bias, gyroscope bias, and magnetometer bias (often 3+ states for each, if the sensors measure along multiple axes). Often when an INS is available, the typical dynamics update step of the Kalman Filter is replaced by the output of the INS, and the position states of the kalman filter are the errors in the INS estimate. You may be able to get that working with the library you referenced, but it will be challenging.  If you do want to use the library, it looks like much of your customization will be in kf-options.js. If you do model-replacement as I discussed in the previous paragraph, your measurements would just be the GPS measurement. You will have to think about which coordinate system you are using. It sounds like you are wanting to use a local cartesian coordinate system; you will need the origin of that coordinate system in latitude/longitude/altitude in order to translate the GPS measurements into that frame.  I could keep going, but my point is that this is a challenging problem. I don't think that anyone will be able to give you an answer in this format, because the answer would probably be hundreds of lines of code with many inputs from you about how exactly you want to do things.",
                "tags_post": [
                    "react-native",
                    "gps",
                    "accelerometer",
                    "kalman-filter"
                ],
                "answers": [
                    {
                        "user": "Dawson Beatty",
                        "date_of_answer": "yesterday",
                        "content": "(This wouldn't fit as a comment, so posting as an answer)  Just for some context: what you are trying to do is really hard. I regularly see research papers about it, and big companies pay their engineers a lot of money to get systems like this working. INS inputs are challenging because of the biases inherent in those types of sensors. In addition to having states in your Kalman Filter for corrected GPS position, you will also need states for accelerometer bias, gyroscope bias, and magnetometer bias (often 3+ states for each, if the sensors measure along multiple axes). Often when an INS is available, the typical dynamics update step of the Kalman Filter is replaced by the output of the INS, and the position states of the kalman filter are the errors in the INS estimate. You may be able to get that working with the library you referenced, but it will be challenging.  If you do want to use the library, it looks like much of your customization will be in kf-options.js. If you do model-replacement as I discussed in the previous paragraph, your measurements would just be the GPS measurement. You will have to think about which coordinate system you are using. It sounds like you are wanting to use a local cartesian coordinate system; you will need the origin of that coordinate system in latitude/longitude/altitude in order to translate the GPS measurements into that frame.  I could keep going, but my point is that this is a challenging problem. I don't think that anyone will be able to give you an answer in this format, because the answer would probably be hundreds of lines of code with many inputs from you about how exactly you want to do things.",
                        "upvotes": "0"
                    }
                ],
                "post_id": "ada87bde-7b34-4718-a124-54637fcf7d92"
            },
            {
                "user": "David Kris",
                "date_post": "Feb 7 at 17:53",
                "title_post": "Cognos Analytics 11 - Decimal length won't exceed 8 decimal places",
                "description_post": "I'm using Cognos Analytics 11 report studio and I'm trying to bring in a number field with trialing decimals. However, the data only shows up to 8 decimal places.  I know in Cognos 11 you can limit the number of decimals by going to Data > Data Format > Number > Number of decimal places. But even after trying this to increase the number of rendered decimals, I am stuck at 8.  If I paste the generated SQL into my dbms I can verify my data should have at least 13 or more decimal places. At this point im stuck and not too sure what else to try?  Note: This is happening with all export types; HTML, Excel, CSV, PDF. All have the same issue.  I've never seen Cognos intentionally exclude decimal length. Like the thread above, I'm also assuming it's because either 1. The precision is undefined or set to 0 or 2. The restrictions Cognos Analytics applies when accessing Oracle data.  Keep in mind, something like this is understandable when exporting as a CSV file since it has decimal limitations.  I will look into the two cases above and I'll update my answer if I find anything new. For the interim, if you're needing a solution urgently, you can try some of the following and see if they either fix the issue or give you a potential workaround.  Typically, specifying the data format number's decimal length should work (excluding CSV). Like you said above, for this you would go to Data > Data Format > Number > Number of decimal places.  When specifying the data format, make sure to include all ancestors for the column; it's possible you are leaving one out. If your report is in a list, ensure you are specifying the decimal precision under both the  \"List Column\" and \"List Column Body\" selections.  In theory, if specified for both selectors this should force a higher decimal precision. Keep in mind, for CSV exports will ignore data formatting rules through Cognos. So this will only work as HTML, Excel, PDF.  If the above solution fails, another possible workaround would be to wrap your item (under the expression definition) in a to_char() and specify the formatting within. It would look something like this to_char(\"Column Name\", '99.9999999999').    This would account for 10 decimal places though you can really make it however long you need.  What's nice about this workaround is if your value only includes 9 decimal places, even if formatted for 10, you won't receive the trailing 0 on the end and the precision will cut off after its true value. This also works for CSV exporting unlike the above method.  Hopefully one of these helps! I will update this if I find the initial reason for excluding past 8 decimals.  Cognos Analytics may be making assumptions about how to handle a FLOAT. You may need to cast the data type deliberately to a more specific type, like NUMBER(30, 16).  Here's a process that assumes some basic object names. Adjust as needed.",
                "tags_post": [
                    "cognos",
                    "cognos-bi",
                    "cognos-11"
                ],
                "answers": [
                    {
                        "user": "cgwoz",
                        "date_of_answer": "yesterday",
                        "content": "I've never seen Cognos intentionally exclude decimal length. Like the thread above, I'm also assuming it's because either 1. The precision is undefined or set to 0 or 2. The restrictions Cognos Analytics applies when accessing Oracle data.  Keep in mind, something like this is understandable when exporting as a CSV file since it has decimal limitations.  I will look into the two cases above and I'll update my answer if I find anything new. For the interim, if you're needing a solution urgently, you can try some of the following and see if they either fix the issue or give you a potential workaround.  Typically, specifying the data format number's decimal length should work (excluding CSV). Like you said above, for this you would go to Data > Data Format > Number > Number of decimal places.  When specifying the data format, make sure to include all ancestors for the column; it's possible you are leaving one out. If your report is in a list, ensure you are specifying the decimal precision under both the  \"List Column\" and \"List Column Body\" selections.  In theory, if specified for both selectors this should force a higher decimal precision. Keep in mind, for CSV exports will ignore data formatting rules through Cognos. So this will only work as HTML, Excel, PDF.  If the above solution fails, another possible workaround would be to wrap your item (under the expression definition) in a to_char() and specify the formatting within. It would look something like this to_char(\"Column Name\", '99.9999999999').    This would account for 10 decimal places though you can really make it however long you need.  What's nice about this workaround is if your value only includes 9 decimal places, even if formatted for 10, you won't receive the trailing 0 on the end and the precision will cut off after its true value. This also works for CSV exporting unlike the above method.  Hopefully one of these helps! I will update this if I find the initial reason for excluding past 8 decimals.",
                        "upvotes": "2"
                    },
                    {
                        "user": "dougp",
                        "date_of_answer": "yesterday",
                        "content": "Cognos Analytics may be making assumptions about how to handle a FLOAT. You may need to cast the data type deliberately to a more specific type, like NUMBER(30, 16).  Here's a process that assumes some basic object names. Adjust as needed.",
                        "upvotes": "1"
                    }
                ],
                "post_id": "e2cc49e6-4393-4af6-9ccc-9104c816a5ca"
            },
            {
                "user": "Vassily",
                "date_post": "Feb 6 at 5:28",
                "title_post": "How to filter queryset by decimal stored in JSON?",
                "description_post": "I store some decimal's string representation in JSONField and want to filter by it. Here's the model:  Content of JSONFields:  I tried a lot of ways to filter queryset by this value. The last one was  but it gives the error:  while I'm sure there's a value for this key in the field  The correct syntax is:  That seems to work fine, though the Django 4.2 documentation says to use the KT transform:  Reference: https://docs.djangoproject.com/en/5.0/topics/db/queries/#kt-expressions  The correct syntax is:",
                "tags_post": [
                    "django"
                ],
                "answers": [
                    {
                        "user": "aaron",
                        "date_of_answer": "Feb 9 at 18:50",
                        "content": "The correct syntax is:  That seems to work fine, though the Django 4.2 documentation says to use the KT transform:  Reference: https://docs.djangoproject.com/en/5.0/topics/db/queries/#kt-expressions",
                        "upvotes": "1"
                    },
                    {
                        "user": "Suresh Chand",
                        "date_of_answer": "Feb 11 at 5:24",
                        "content": "The correct syntax is:",
                        "upvotes": "-1"
                    }
                ],
                "post_id": "b3d6ea62-4f76-4ed1-b26a-98a04461cf88"
            },
            {
                "user": "Sean",
                "date_post": "Nov 24, 2019 at 10:09",
                "title_post": "Angular CDK Drag/Drop List with table-body / rows distorting width (without Material)",
                "description_post": "I'm using a plain (Bootstrap) table which I want to have sortable rows on. I'm using the Angular CDK (DragDropModule) to implement sorting / ordering. However, when the row gets dragged, it distorts the width, as the cdkDragPreview (tr element) is now outside the table, appended to the body, so it has a different display style and the column widths wouldn't match with the original table even if it was display:table.  Here's the rough html:  How do I get the dragging/ordering to 'look good'?  I've ended up NOT using a drag preview (cdkDragPreview) as that's too difficult to get the columns widths right. Instead, I simply set the cdkDragPreview to an empty element so nothing shows, and let the user see the actual (underlying) sort, rather than the preview.  So, simply:  If anyone can find a good, easy way of getting the column widths right, that would be ideal...  I ended up to set the column width manually.  See the working example: https://angular-cdk-drag-drop-bootstrap-table.stackblitz.io  Result    Setting display:flex; to the table row in the cdk drag preview worked in my case.  I also had to set flex: 1 0 auto; to the penultimate column.",
                "tags_post": [
                    "angular",
                    "angular-cdk"
                ],
                "answers": [
                    {
                        "user": "Sean",
                        "date_of_answer": "Nov 24, 2019 at 10:09",
                        "content": "I've ended up NOT using a drag preview (cdkDragPreview) as that's too difficult to get the columns widths right. Instead, I simply set the cdkDragPreview to an empty element so nothing shows, and let the user see the actual (underlying) sort, rather than the preview.  So, simply:  If anyone can find a good, easy way of getting the column widths right, that would be ideal...",
                        "upvotes": "4"
                    },
                    {
                        "user": "trungvose",
                        "date_of_answer": "Apr 19, 2023 at 1:32",
                        "content": "I ended up to set the column width manually.  See the working example: https://angular-cdk-drag-drop-bootstrap-table.stackblitz.io  Result  ",
                        "upvotes": "1"
                    },
                    {
                        "user": "AbdurrahmanY",
                        "date_of_answer": "2 days ago",
                        "content": "Setting display:flex; to the table row in the cdk drag preview worked in my case.  I also had to set flex: 1 0 auto; to the penultimate column.",
                        "upvotes": "0"
                    }
                ],
                "post_id": "f2c3d2ab-65a0-422e-8ffa-d8d4c2f62fdf"
            },
            {
                "user": "Gholamali Irani",
                "date_post": "Feb 8 at 23:48",
                "title_post": "How to print all types of read and write access list to class fields for each methods of class in Java with JavaParser library",
                "description_post": "I want to print all field access list for each method of a class in Java with JavaParser Library (3.25.8).  I try this:  and my pom.xml is:  for Example.java:  The output I expected should be:  But the output is:  The javadoc of FieldAccessExpr says it is meant for detecting accesses of the type person.name, which is probably why it detected System.out. Through some trial and error, I figured out that the expression field1 = 10; is of type AssignExpr and that System.out.println(field2); is of type MethodCallExpr. A ++ or -- expression is of type UnaryExpr. Also to filter out expressions that only use local variables, I collected all of the class level fields at the start and included only expressions that involved any of those fields. Combining all of that together, for the Example class, I'm able to get the expected output using below code:  Couldn't figure out exactly how to differentiate between a read and write access as something like a method call could read or write internally. Also you might still need to include more expression types and add some filtering, to include only fields within the desired class.  Here is my solution. It works as follows:  As a bonus, I have included a dump() method which shows how to easily print an AST tree.  Code:  Test file:  Output:  Finally, I found the easier way to solve this.  Please update your code to this:  If you run this code, you will get the output that you were expecting.    Few points to be noted:  See if this helps you.  Update: As per @Olivier request, I have updated the code to handle more scenarios:  I'm using the same Example class mentioned in the @Olivier answer to demonstrate the scenarios.  Output:",
                "tags_post": [
                    "java",
                    "javaparser"
                ],
                "answers": [
                    {
                        "user": "devatherock",
                        "date_of_answer": "Feb 11 at 15:23",
                        "content": "The javadoc of FieldAccessExpr says it is meant for detecting accesses of the type person.name, which is probably why it detected System.out. Through some trial and error, I figured out that the expression field1 = 10; is of type AssignExpr and that System.out.println(field2); is of type MethodCallExpr. A ++ or -- expression is of type UnaryExpr. Also to filter out expressions that only use local variables, I collected all of the class level fields at the start and included only expressions that involved any of those fields. Combining all of that together, for the Example class, I'm able to get the expected output using below code:  Couldn't figure out exactly how to differentiate between a read and write access as something like a method call could read or write internally. Also you might still need to include more expression types and add some filtering, to include only fields within the desired class.",
                        "upvotes": "1"
                    },
                    {
                        "user": "Olivier",
                        "date_of_answer": "yesterday",
                        "content": "Here is my solution. It works as follows:  As a bonus, I have included a dump() method which shows how to easily print an AST tree.  Code:  Test file:  Output:",
                        "upvotes": "1"
                    },
                    {
                        "user": "Anish B.",
                        "date_of_answer": "8 hours ago",
                        "content": "Finally, I found the easier way to solve this.  Please update your code to this:  If you run this code, you will get the output that you were expecting.    Few points to be noted:  See if this helps you.  Update: As per @Olivier request, I have updated the code to handle more scenarios:  I'm using the same Example class mentioned in the @Olivier answer to demonstrate the scenarios.  Output:",
                        "upvotes": "1"
                    }
                ],
                "post_id": "a3d6e0b6-7132-49bd-a7d5-9375ce5c7c5b"
            },
            {
                "user": "jipot",
                "date_post": "Aug 29, 2022 at 19:42",
                "title_post": "How to authenticate to oauth2-proxy via cURL or POSTMAN",
                "description_post": "I have my service set behind oauth2-proxy and I am using version 4.0.0.  I am trying to hit an API behind the service, but unfortunately, I always get a 403 forbidden error because of oauth2-proxy being in the way.  I am looking for a way to authenticate via g-suite using oauth2-proxy and generate a token that I can then use for the service.  Does oauth2-proxy support any kind of way to authenticate via cURL or POST call?  It feels to me that your deployment separation is not right. OAuth has a strong focus on separation of web and API concerns. The oauth2-proxy utility is a web client and should not be deployed in front of APIs since that can limit your options.  SUBOPTIMAL DEPLOYMENT  OPTIMIZED DEPLOYMENT  If I'm misunderstanding anything, maybe clarify your question and post back.  For Azure Entra IdP, I faced a similar situation. Here I logged in using SSO in web-browser. Noted down the Bearer Token or _oauth2_proxy in cookies. And passed this in cUrl or Postman. For Gsuite, I believe cookies with names similar to this __Secure-3PSID contains the value required for verifying ot OAuth Level, that this request is authenticated.  So note down these cookies values and pass it in cUrl or Postman, along with your normal request to respected service. Hopefully that solves your problem.",
                "tags_post": [
                    "oauth-2.0",
                    "google-oauth",
                    "oauth2-proxy"
                ],
                "answers": [
                    {
                        "user": "Gary Archer",
                        "date_of_answer": "2 days ago",
                        "content": "It feels to me that your deployment separation is not right. OAuth has a strong focus on separation of web and API concerns. The oauth2-proxy utility is a web client and should not be deployed in front of APIs since that can limit your options.  SUBOPTIMAL DEPLOYMENT  OPTIMIZED DEPLOYMENT  If I'm misunderstanding anything, maybe clarify your question and post back.",
                        "upvotes": "0"
                    },
                    {
                        "user": "Baibhav Vishal",
                        "date_of_answer": "1 hour ago",
                        "content": "For Azure Entra IdP, I faced a similar situation. Here I logged in using SSO in web-browser. Noted down the Bearer Token or _oauth2_proxy in cookies. And passed this in cUrl or Postman. For Gsuite, I believe cookies with names similar to this __Secure-3PSID contains the value required for verifying ot OAuth Level, that this request is authenticated.  So note down these cookies values and pass it in cUrl or Postman, along with your normal request to respected service. Hopefully that solves your problem.",
                        "upvotes": "0"
                    }
                ],
                "post_id": "e45f7260-7418-479a-841c-8a92566f95e0"
            },
            {
                "user": "art",
                "date_post": "Feb 6 at 5:25",
                "title_post": "Api Gateway vs Websocket Server for messaging app for maintaining web-sockets",
                "description_post": "I was going through high-Level system design for a messaging app.(1 million users,50 messages per day) Some people take Api Gateway while some take Websocket server for the following- The responsibility of each of these servers is to provide a port to every online user (both maintaining socket connection)  I want to know which one is correct or which one should be used and what are the tradeoffs.    If we talk about chat system, then we should use WebSocket because REST will be inefficient as it would require to implement manual pooling, however WebSocket creates two-way connection with low latency.  Moreover, all the frequently updated applications used WebSocket because it is faster than HTTP Connection. Read more about What is web socket and how it is different from the HTTP?  Simply put, a WebSocket connection is based on HTTP (and TCP as transport) over a single port. Here\u2019s the summary of steps.",
                "tags_post": [
                    "design-patterns",
                    "api-gateway",
                    "system-design",
                    "high-level-architecture"
                ],
                "answers": [
                    {
                        "user": "StepUp",
                        "date_of_answer": "Feb 6 at 14:21",
                        "content": "If we talk about chat system, then we should use WebSocket because REST will be inefficient as it would require to implement manual pooling, however WebSocket creates two-way connection with low latency.  Moreover, all the frequently updated applications used WebSocket because it is faster than HTTP Connection. Read more about What is web socket and how it is different from the HTTP?  Simply put, a WebSocket connection is based on HTTP (and TCP as transport) over a single port. Here\u2019s the summary of steps.",
                        "upvotes": "0"
                    }
                ],
                "post_id": "b401a6f0-2c90-45c4-a5ab-2c4432ac30e2"
            },
            {
                "user": "rubo77",
                "date_post": "Feb 7 at 1:01",
                "title_post": "create a link with clicklistener on drawText",
                "description_post": "I try to add a link to my credits screen in my app Roboyard that opens in the Browser  this is my RenderManager.java:  and this is my CreditsGameScreen.java:  The links appear and are blue, but still they are not clickable by touch  What am I missing?  You can pass a click listener to the view and override dispatchTouchEvent and dispatchTouchEvent and call method of your listener when user do quickly ACTION_DOWN and ACTION_UP. Just like any other view.",
                "tags_post": [
                    "java",
                    "android"
                ],
                "answers": [
                    {
                        "user": "Abhishek Tiwari",
                        "date_of_answer": "7 hours ago",
                        "content": "You can pass a click listener to the view and override dispatchTouchEvent and dispatchTouchEvent and call method of your listener when user do quickly ACTION_DOWN and ACTION_UP. Just like any other view.",
                        "upvotes": "0"
                    }
                ],
                "post_id": "1da95ca2-0b71-4894-8b07-49f528a1caeb"
            },
            {
                "user": "Priyank Dave",
                "date_post": "Feb 7 at 7:45",
                "title_post": "How to Disable WEB USB Flag in ChromeDriver Selenium in C#?",
                "description_post": "Error: [3528:3760:0205/072321.889:ERROR:device_event_log_impl.cc(192)] [07:23:21.489] USB: usb_service_win.cc:105  SetupDiGetDeviceProperty({{A45C254E-DF1C-4EFD-8020-67D146A850E0}, 6}) failed: Element not found. (0x490)  I'm running my application in AWS EC2 Instance and in local it runs fine but not in server.  I'm facing above errors in Console as logs and my application is stuck at this point.  if i use prefs it gives error like there is already an option for the prefs capabilty.  Then I tried this  Then I got this error: OpenQA.Selenium.WebDriverException: unknown error: cannot parse capability: goog:chromeOptions  I don't know the reason the answer is marked down, without comment. I believe there are more than two ways of solving any issues and there might be another approach worth trying. Sometimes, the error might not be directly related to the capability itself but rather how it's being passed or interpreted by the Selenium WebDriver.  Try this code sample: Ensure you modify the URL to the URL you would like to navigate.  The above is a C# code.  I have combined the disabling of WebUSB via command-line argument (--disable-webusb) and setting the preference through the prefs capability. This is to make sure both approaches are taken to disable WebUSB, it might help in cases where the error is related to capability interpretation or interaction.  Analyzing your error code, the error stated there is already an option for the \"prefs\" capability when trying to add the \"prefs\" capability, it suggests that the \"prefs\" capability might already be set elsewhere in your code or that it's not the correct approach for modifying Chrome options in your Selenium setup.  Therefore, you can directly add the Chrome options using the \"chromeOptions\" capability instead of trying to add them through the \"prefs\" capability. The following example shows how you can modify your code and using the \"chromeOptions\":  By directly adding the --disable-webusb argument to the Chrome options and passing them using the \"chromeOptions\" capability, you should be able to disable the WEB USB feature in ChromeDriver Selenium in C# without encountering the error related to the \"prefs\" capability.  Also, thinking about setting the excludeSwitches capability that might really work like:  but below approach is much better:  This will make sure that Chrome options are correctly configured to disable WEB USB and passed to the ChromeDriver instance, resolving the issue you have encountered.",
                "tags_post": [
                    "c#",
                    "amazon-web-services",
                    "web-scraping",
                    "selenium-chromedriver",
                    "web-crawler"
                ],
                "answers": [
                    {
                        "user": "Sina Salam",
                        "date_of_answer": "yesterday",
                        "content": "I don't know the reason the answer is marked down, without comment. I believe there are more than two ways of solving any issues and there might be another approach worth trying. Sometimes, the error might not be directly related to the capability itself but rather how it's being passed or interpreted by the Selenium WebDriver.  Try this code sample: Ensure you modify the URL to the URL you would like to navigate.  The above is a C# code.  I have combined the disabling of WebUSB via command-line argument (--disable-webusb) and setting the preference through the prefs capability. This is to make sure both approaches are taken to disable WebUSB, it might help in cases where the error is related to capability interpretation or interaction.",
                        "upvotes": "0"
                    },
                    {
                        "user": "Sina Salam",
                        "date_of_answer": "yesterday",
                        "content": "Analyzing your error code, the error stated there is already an option for the \"prefs\" capability when trying to add the \"prefs\" capability, it suggests that the \"prefs\" capability might already be set elsewhere in your code or that it's not the correct approach for modifying Chrome options in your Selenium setup.  Therefore, you can directly add the Chrome options using the \"chromeOptions\" capability instead of trying to add them through the \"prefs\" capability. The following example shows how you can modify your code and using the \"chromeOptions\":  By directly adding the --disable-webusb argument to the Chrome options and passing them using the \"chromeOptions\" capability, you should be able to disable the WEB USB feature in ChromeDriver Selenium in C# without encountering the error related to the \"prefs\" capability.  Also, thinking about setting the excludeSwitches capability that might really work like:  but below approach is much better:  This will make sure that Chrome options are correctly configured to disable WEB USB and passed to the ChromeDriver instance, resolving the issue you have encountered.",
                        "upvotes": "-1"
                    }
                ],
                "post_id": "861a3730-08be-4ba0-b3cc-0a37c8c64076"
            },
            {
                "user": "Olaf Kock",
                "date_post": "Oct 18, 2022 at 4:20",
                "title_post": "When Using Azure SDK with apache guacamole extension getting application startup failure",
                "description_post": "When adding the below dependency to extension/guacamole-auth-jdbc-base the application's startup fails with the error ClassNotFound for error. There must be some dependency conflict but not able to understand which dependency is causing the issue.  Have tried using azure-sdk-bom to remove azure dependency version but was of no effort.  Have also tried getting the mvn dependency tree but most of the library result in been conflict with/without the azure dependency mentioned. Please help to understand how the postgres jar is build  Caused by: java.lang.ClassNotFoundException: org.apache.guacamole.auth.postgresql.PostgreSQLAuthenticationProvider  Was able to resolve the issue. The azure SDK was adding a transitive dependency in the guacamole-auth-jdbc-postgres module. Adding exclusion list for the azure sdk in childe module pom (guacamole-auth-jdbc-postgres) solved the issue.",
                "tags_post": [
                    "guacamole",
                    "azure-identity"
                ],
                "answers": [
                    {
                        "user": "rest17",
                        "date_of_answer": "Oct 19, 2022 at 1:43",
                        "content": "Was able to resolve the issue. The azure SDK was adding a transitive dependency in the guacamole-auth-jdbc-postgres module. Adding exclusion list for the azure sdk in childe module pom (guacamole-auth-jdbc-postgres) solved the issue.",
                        "upvotes": "0"
                    }
                ],
                "post_id": "0abb1e60-2215-4a8a-a43d-be9546295907"
            },
            {
                "user": "mti",
                "date_post": "Feb 6, 2023 at 17:16",
                "title_post": "Understanding memory allocation in `wasm-bindgen`",
                "description_post": "I'd like to improve my understanding of memory management and the usage of function free with wasm-bindgen. My understanding is that anything allocated must be freed. In particular this should hold for values passed from JS into Rust.  In the docs, there is an example where a &str is passed from JS to Rust, and indeed is freed at the end, as expected.  However, in the following function, which is also generated by wasm-bindgen, a Uint32Array is passed to wasm, whereby memory is allocated, but seemingly this memory is not freed at the end of the function.  This is generated from the following rust code.  Why is the memory allocated in passArray32ToWasm0 seemingly not freed here?  When you pass an array from Rust to JavaScript, the memory is still owned by Rust. If you want to free the memory after using it in JavaScript, you need to communicate this back to Rust. One way to achieve this is by using a callback mechanism to inform Rust that the memory is no longer needed in JavaScript, and then Rust can free the memory accordingly.  Basically, for what ever object you are passing to js, you also have to write a clean up function to clean the memory and in js side, you call this callback after you used the object",
                "tags_post": [
                    "rust",
                    "wasm-bindgen"
                ],
                "answers": [
                    {
                        "user": "Yilmaz",
                        "date_of_answer": "yesterday",
                        "content": "When you pass an array from Rust to JavaScript, the memory is still owned by Rust. If you want to free the memory after using it in JavaScript, you need to communicate this back to Rust. One way to achieve this is by using a callback mechanism to inform Rust that the memory is no longer needed in JavaScript, and then Rust can free the memory accordingly.  Basically, for what ever object you are passing to js, you also have to write a clean up function to clean the memory and in js side, you call this callback after you used the object",
                        "upvotes": "0"
                    }
                ],
                "post_id": "220f42dd-b20d-4b82-9933-f527cc57745e"
            },
            {
                "user": "matt",
                "date_post": "Jun 19, 2022 at 15:54",
                "title_post": "Swift: iOS 15 date formatter to convert date to a custom string",
                "description_post": "I'm trying to convert a date to a string using iOS 15 style formatter like this:  The Date (as printed in the console) is  How can I build the following string:  out of this date object, using the new iOS 15 date formatter?  You would have to construct a verbatim format style, such as this:",
                "tags_post": [
                    "ios",
                    "swift"
                ],
                "answers": [
                    {
                        "user": "matt",
                        "date_of_answer": "Jun 19, 2022 at 16:51",
                        "content": "You would have to construct a verbatim format style, such as this:",
                        "upvotes": "4"
                    }
                ],
                "post_id": "3f8cd5fd-bc9a-4034-8368-b738bb2e531e"
            },
            {
                "user": "Josh Friedlander",
                "date_post": "Jan 30 at 5:21",
                "title_post": "Recommendation to store and process data in json format of variable depth for org chart representation",
                "description_post": "I have a hierarchical lineage for object dependency in json format. The json itself has a very simple structure but it has variable depth. I have attached an image to show the tree structure. The depth of the json could be variable as it an object lineage of dependencies which could be n level deep.  The structure of the lineage is that is starts from a Dashboard >> Cubes / Reports >> Report Objects >> Schema Objects >> Tables / columns, but the dashboard could have multiple cubes and reports. The cubes itself could comprise of multiple reports, so there could be circular dependency. However, all the lineage's start (root) would be a dashboard and it would end with a table / column. Some could have 5 levels, some may have 20+.  I wanted to understand what is the best way to store this data and if there are any recommendations or best practices for storing it in a structured format. The end goal to have a standard data model to load such datasets and eventually represent them graphically as an org chart or tree diagram to show the lineage. So the json structure should be parse able for creating a deep tree / network chart.  You can use a recursive structure as you have, where each node can contain dependents that follows the same structure as the parent. That is a common practice for representing trees in JSON.  For storage and processing, you can use a NoSQL database like MongoDB, which handles JSON natively, or in a relational database with JSON support, such as PostgreSQL.  Make sure each node has a unique identifier, and use standard keys for each level (e.g., id, name, type, subtype, location, dependents)\nConsider using a graph database for complex dependencies and querying, like Neo4j.\nTo represent data graphically, use libraries like D3.js or vis.js, which can parse your JSON and create interactive charts.  You can update your structure to include a reference system for managing circular dependencies. For instance:  For each dependent that is a reference to another entity, id_ref is used to link to the actual entity with that id.\nThat helps avoid circular dependencies within the JSON structure itself and makes it easier to parse and visualize.",
                "tags_post": [
                    "json",
                    "database",
                    "treeview",
                    "visualization"
                ],
                "answers": [
                    {
                        "user": "VonC",
                        "date_of_answer": "Feb 11 at 18:03",
                        "content": "You can use a recursive structure as you have, where each node can contain dependents that follows the same structure as the parent. That is a common practice for representing trees in JSON.  For storage and processing, you can use a NoSQL database like MongoDB, which handles JSON natively, or in a relational database with JSON support, such as PostgreSQL.  Make sure each node has a unique identifier, and use standard keys for each level (e.g., id, name, type, subtype, location, dependents)\nConsider using a graph database for complex dependencies and querying, like Neo4j.\nTo represent data graphically, use libraries like D3.js or vis.js, which can parse your JSON and create interactive charts.  You can update your structure to include a reference system for managing circular dependencies. For instance:  For each dependent that is a reference to another entity, id_ref is used to link to the actual entity with that id.\nThat helps avoid circular dependencies within the JSON structure itself and makes it easier to parse and visualize.",
                        "upvotes": "0"
                    }
                ],
                "post_id": "c832e257-890e-4ae7-84cf-8381b33edddc"
            },
            {
                "user": "markhorrocks",
                "date_post": "Feb 7 at 15:50",
                "title_post": "How to add filter expressions to a list in Google Analytics Data API (GA4) using the Ruby client?",
                "description_post": "I'm using the google-analytics-data gem to query the GA4 API in a ruby client.  When I attempt to add an array of filter expressions to a filter expression list I get an error on line 161:  Here is my code  edit. This is the output from the above code  That error reads like gRPC barfing because it received something else when it expected an array, or it received an array but something in the array is not the kind of repeated object it's expecting.  Is the argument passed to push in your code ever an array? If so, you're going to need to prefix it with a splat (*) to spread the elements out into individual arguments. If the protobuf for that expressions assignment is expecting a message with a definition along the lines of repeated Expression expressions = 1; and then it receives an array object where one of the elements is a whole other array of elements, that would cause an error like that. The expressions=(value) assignment method documentation indicates that it's expecting an array of FilterExpression objects and it looks like your code is doing that, but some of the variable names in your code don't track so I'm going to make some assumptions...  The initialization of analytics_request_object_filter_expression_list is missing, but I'm assuming it's initialized as a Google::Analytics::Data::V1beta::FilterExpressionList.  I think this is the actual problem line:  Assuming it has a typo and the second-to-last underscore should be a period, this line would be appending an entire ExpressionList (as a single element) to the ExpressionList returned by the and_group accessor method (which would cause the error you're getting). I'd hazard a guess that this will work:  However, the API defines assignment and accessor methods for and_group but does not define an append method... while calling #push on the list returned by the accessor method will technically work to add new elements, it is using ruby's variable handling to hack around how the object is designed to be interacted with. The and_group on that object should also already be empty based on what you've provided, so it would be better practice to just pass the list to the and_group= assignment method:  Recommend running your code line-by-line in a console and taking a close look at your objects.",
                "tags_post": [
                    "ruby",
                    "google-analytics-4"
                ],
                "answers": [
                    {
                        "user": "Allison",
                        "date_of_answer": "Feb 8 at 7:26",
                        "content": "That error reads like gRPC barfing because it received something else when it expected an array, or it received an array but something in the array is not the kind of repeated object it's expecting.  Is the argument passed to push in your code ever an array? If so, you're going to need to prefix it with a splat (*) to spread the elements out into individual arguments. If the protobuf for that expressions assignment is expecting a message with a definition along the lines of repeated Expression expressions = 1; and then it receives an array object where one of the elements is a whole other array of elements, that would cause an error like that. The expressions=(value) assignment method documentation indicates that it's expecting an array of FilterExpression objects and it looks like your code is doing that, but some of the variable names in your code don't track so I'm going to make some assumptions...  The initialization of analytics_request_object_filter_expression_list is missing, but I'm assuming it's initialized as a Google::Analytics::Data::V1beta::FilterExpressionList.  I think this is the actual problem line:  Assuming it has a typo and the second-to-last underscore should be a period, this line would be appending an entire ExpressionList (as a single element) to the ExpressionList returned by the and_group accessor method (which would cause the error you're getting). I'd hazard a guess that this will work:  However, the API defines assignment and accessor methods for and_group but does not define an append method... while calling #push on the list returned by the accessor method will technically work to add new elements, it is using ruby's variable handling to hack around how the object is designed to be interacted with. The and_group on that object should also already be empty based on what you've provided, so it would be better practice to just pass the list to the and_group= assignment method:  Recommend running your code line-by-line in a console and taking a close look at your objects.",
                        "upvotes": "1"
                    }
                ],
                "post_id": "3a6865b3-caa5-4dff-b149-5455d3e69c51"
            },
            {
                "user": "lpetrucci",
                "date_post": "Jan 21 at 10:14",
                "title_post": "PWA is adding out-of-scope sites to history stack",
                "description_post": "I'm working with a PWA that has oAuth logins. I've specified my PWA's scope as:  So that any navigation to an out-of-scope URL would trigger an in-app browser.  In my code, when doing oAuth, I send users to the authorisation url with:  This opens the in-app browser for oAuth which allows me to login, once done the user is sent back to my app.  HOWEVER, when I then call history.go(-1) the user is sent to \"https://accounts.google.com/o/oauth2/v2/auth?client\u2026\" again instead of the page they were previously on.  It looks like even though the authorisation URL is not in-scope and opened in an in-app browser, it's still added to the history.  Is this a bug? I can't find any information about how history stack and in-app browser is handled.  Video of the behavior can be found here.  This is not a bug. You're using the History API which keeps track of your session history. When you navigate the user to your oAuth URL, it is added to the history state for that session. Once the user is redirect back to your app, the last entry will be oAuth URL (-1).  You could easily get around this by going back two entries (-2) or editing/removing the last entry with replaceState() and history.deleteUrl().",
                "tags_post": [
                    "javascript",
                    "progressive-web-apps"
                ],
                "answers": [
                    {
                        "user": "JStanton",
                        "date_of_answer": "2 days ago",
                        "content": "This is not a bug. You're using the History API which keeps track of your session history. When you navigate the user to your oAuth URL, it is added to the history state for that session. Once the user is redirect back to your app, the last entry will be oAuth URL (-1).  You could easily get around this by going back two entries (-2) or editing/removing the last entry with replaceState() and history.deleteUrl().",
                        "upvotes": "1"
                    }
                ],
                "post_id": "fe442062-b424-4ec3-8be2-150e9308ed47"
            },
            {
                "user": "ax.",
                "date_post": "Feb 7 at 14:25",
                "title_post": "datatables.net superscript excel export",
                "description_post": "In my datatables.net I have a superscript tag <td>System Architect<sup>5</sup></td> that, using button/excelHtml5, I need to export in my excel file to be a style in excel. Below is the logic I am using to export to excel is there a way to replace the <sup>5</sup> with the style?  Working sample  https://jsfiddle.net/tjmcdevitt/3dvf1x9o/5/  There are 2 related tasks needed here (task 2 will actually need to be performed first):  Task 1: The Excel file needs to use a \"run\" - a sequence of text strings, where each string is formatted differently, within one Excel cell. Runs are specified using the <r> tag in Open Office XML formatting. So, you need to replace the original XML generated by DataTables with this new string:  Original:  Replacement:  Note the two separate <r>...<\\r> tags in the above string - one for the standard text and one for the superscript text.  Task 2: By default, DataTables will strip the HTML from the content of your DataTables cells - so your content System Architect<sup>5</sup> will become System Architect5 - as you have no doubt already noticed.  When this happens, you no longer know when to use superscripts - that information has been removed from the data extracted from the DataTable - and therefore the data sent to Excel cannot be formatted correctly.  So, task 2 needs to be performed first (preserving the superscript instructions), so that we can then perform task 1 (using a \"rich text\" string in Excel, mixing different styles in one Excel cell).  Here is task 2:  This uses a DataTables format option to detect where the exported DataTAbles cell data contains a <sup> tag. Any such tags are preserved, overriding the default behavior where tags are stripped out. Any other tags which may exist elsewhere in the data are removed, as usual.  This means the <sup> information is passed to Excel, where we can detect it and then modify that data accordingly...  Here is task 1:  This uses a function to customize the data in the Excel file, after we have preserved the <sup> tag data.  It finds Excel column text data <c><t>...<\\t><\\c>.  It then uses a JavaScript regular expression, so that we can extract the found text - such as your System Architect<sup>5</sup> example - and it splits that text into two pieces - the System Architect label and the 5 superscript value.  Now we can build a new Excel XML string using these two values. This is the excelRun variable. We use this to replace the original content.  The end result is:    For reference, here is the full code (it contains some additional DataTables libraries you probably don't need - e.g. for PDF handling):  Final Notes  In DataTables there is often more than one way to accomplish a task such as this, so someone else may have a better solution.  Bear in mind also that this approach makes some attempt to provide a more generalized solution instead of hard-coding your System Architect 5 data contents. But even so, it has its limitations. For example, what if you want to handle other HTML tags in addition to <sup> in some way? For example, see the <b> tag in my test data, which is discarded.  You can often gain insight into how to build a non-standard Excel XML string by creating a simple Excel file for yourself (using Excel directly, not using DataTables). You can, for example, create a simple Excel file containing only one cell, with the formatting you want. You can then unzip that file to inspect what Excel created, and how it handled the formatting you want. That is how I confirmed the correct way to use the Excel XML <r> tag. In Excel's case, it added this to the shared strings list. In my solution I did not use that list, because DataTables does not use it (by default). A better solution (if you have many repeated identical strings) would be to create and use a shared strings list in your Excel file. It can help to keep the file size smaller, if you have very large files with lots of repeated strings.",
                "tags_post": [
                    "excel",
                    "datatables"
                ],
                "answers": [
                    {
                        "user": "andrewJames",
                        "date_of_answer": "Feb 10 at 0:22",
                        "content": "There are 2 related tasks needed here (task 2 will actually need to be performed first):  Task 1: The Excel file needs to use a \"run\" - a sequence of text strings, where each string is formatted differently, within one Excel cell. Runs are specified using the <r> tag in Open Office XML formatting. So, you need to replace the original XML generated by DataTables with this new string:  Original:  Replacement:  Note the two separate <r>...<\\r> tags in the above string - one for the standard text and one for the superscript text.  Task 2: By default, DataTables will strip the HTML from the content of your DataTables cells - so your content System Architect<sup>5</sup> will become System Architect5 - as you have no doubt already noticed.  When this happens, you no longer know when to use superscripts - that information has been removed from the data extracted from the DataTable - and therefore the data sent to Excel cannot be formatted correctly.  So, task 2 needs to be performed first (preserving the superscript instructions), so that we can then perform task 1 (using a \"rich text\" string in Excel, mixing different styles in one Excel cell).  Here is task 2:  This uses a DataTables format option to detect where the exported DataTAbles cell data contains a <sup> tag. Any such tags are preserved, overriding the default behavior where tags are stripped out. Any other tags which may exist elsewhere in the data are removed, as usual.  This means the <sup> information is passed to Excel, where we can detect it and then modify that data accordingly...  Here is task 1:  This uses a function to customize the data in the Excel file, after we have preserved the <sup> tag data.  It finds Excel column text data <c><t>...<\\t><\\c>.  It then uses a JavaScript regular expression, so that we can extract the found text - such as your System Architect<sup>5</sup> example - and it splits that text into two pieces - the System Architect label and the 5 superscript value.  Now we can build a new Excel XML string using these two values. This is the excelRun variable. We use this to replace the original content.  The end result is:    For reference, here is the full code (it contains some additional DataTables libraries you probably don't need - e.g. for PDF handling):  Final Notes  In DataTables there is often more than one way to accomplish a task such as this, so someone else may have a better solution.  Bear in mind also that this approach makes some attempt to provide a more generalized solution instead of hard-coding your System Architect 5 data contents. But even so, it has its limitations. For example, what if you want to handle other HTML tags in addition to <sup> in some way? For example, see the <b> tag in my test data, which is discarded.  You can often gain insight into how to build a non-standard Excel XML string by creating a simple Excel file for yourself (using Excel directly, not using DataTables). You can, for example, create a simple Excel file containing only one cell, with the formatting you want. You can then unzip that file to inspect what Excel created, and how it handled the formatting you want. That is how I confirmed the correct way to use the Excel XML <r> tag. In Excel's case, it added this to the shared strings list. In my solution I did not use that list, because DataTables does not use it (by default). A better solution (if you have many repeated identical strings) would be to create and use a shared strings list in your Excel file. It can help to keep the file size smaller, if you have very large files with lots of repeated strings.",
                        "upvotes": "3"
                    }
                ],
                "post_id": "6acc1043-47a1-473e-b9d1-06202d1453ec"
            },
            {
                "user": "AaYan Yasin",
                "date_post": "Feb 6 at 20:37",
                "title_post": "Flutter Flow - Custom Action Not working on Android APK",
                "description_post": "I am new to flutter flow & Dart, while using custom action which I linked to my widget in action flow editor everything went smoothly until I found an abnormal behavior ( There are no visible errors in my program ):  This is the code/Custom Action I'm using in flutter flow :-  This should be the output of this action which I'm passing in an alert dialog box :-  I tried to manipulate the code and also use simpler test code like just returning a sample String which in that case worked fine on all platforms, but this code isn't. i also double checked the data types of my AppState variables and those were ok.  If its working in Debug, then why not in android?  EDIT: After using web log Ctrl+Shift+j saw this on my console:  Answer ( For future, if anyone encounters same problem )  Thankyou everyone for not responding to my request, however I found the the problem causing this error which was in this line of code:  Seems like flutter flow does not support String to Map conversion on android or at least not in my case, So I changed the whole logic to:  Now, don't know why this was an issue but Code is finally working on all devices.",
                "tags_post": [
                    "android",
                    "dart",
                    "mobile",
                    "flutterflow"
                ],
                "answers": [
                    {
                        "user": "AaYan Yasin",
                        "date_of_answer": "yesterday",
                        "content": "Answer ( For future, if anyone encounters same problem )  Thankyou everyone for not responding to my request, however I found the the problem causing this error which was in this line of code:  Seems like flutter flow does not support String to Map conversion on android or at least not in my case, So I changed the whole logic to:  Now, don't know why this was an issue but Code is finally working on all devices.",
                        "upvotes": "0"
                    }
                ],
                "post_id": "6051655f-21ea-4055-baa5-b67a304bac86"
            },
            {
                "user": "dknaack",
                "date_post": "2 days ago",
                "title_post": "Android: Keep Second Screen on",
                "description_post": "I've built a little Test Application. The goal was:  Showing different content was easy using DISPLAY_SERVICE and the WindowManager (WINDOW_SERVICE).  Then I created a ForegroundService to do my work in the background, this included showing the content on the second screen.  Everything works as expected at this point.  But I want the second screen to be on all the time. Currently, when I press the power button on the phone, the second screen goes black too.  I tried WindowManager.LayoutParams.FLAG_LAYOUT_IN_SCREEN but it doesn't work.  Any idea?  The WindowManager.LayoutParams.FLAG_LAYOUT_IN_SCREEN flag will not help in keeping the screen on, as it more related to layout than power management.  You can check how the termux/termux-app implemented that, as they had a similar feature request (issue 897).  To keep the screen on, you will need to acquire a partial WakeLock for your foreground service. That makes sure the CPU stays on, but does not necessarily keep the screen on, as described in this answer.  In your ForegroundService, you will manage the WakeLock, acquiring it when the service starts and releasing it when the service is stopped or destroyed.  You can see on termux/termux-app#TermuxService a variation, using onStartCommand(), with newWakeLock call made in actionAcquireWakeLock().  For the second screen, make sure the content displayed is set to keep the screen on. That can usually be managed by setting flags on the Window of the Activity or View you are displaying on the second screen, as documented in Keep the device awake / Keep the screen on.  Or, if you are working directly with a View:  That last call is the one used by termux/termux-app#toggleKeepScreenOn().  Make sure you have the necessary permissions for using a WakeLock, declared in your AndroidManifest.xml:  And, since using a WakeLock can significantly increase battery consumption, check the impact of that approach for your application.",
                "tags_post": [
                    "java",
                    "android",
                    "kotlin"
                ],
                "answers": [
                    {
                        "user": "VonC",
                        "date_of_answer": "9 hours ago",
                        "content": "The WindowManager.LayoutParams.FLAG_LAYOUT_IN_SCREEN flag will not help in keeping the screen on, as it more related to layout than power management.  You can check how the termux/termux-app implemented that, as they had a similar feature request (issue 897).  To keep the screen on, you will need to acquire a partial WakeLock for your foreground service. That makes sure the CPU stays on, but does not necessarily keep the screen on, as described in this answer.  In your ForegroundService, you will manage the WakeLock, acquiring it when the service starts and releasing it when the service is stopped or destroyed.  You can see on termux/termux-app#TermuxService a variation, using onStartCommand(), with newWakeLock call made in actionAcquireWakeLock().  For the second screen, make sure the content displayed is set to keep the screen on. That can usually be managed by setting flags on the Window of the Activity or View you are displaying on the second screen, as documented in Keep the device awake / Keep the screen on.  Or, if you are working directly with a View:  That last call is the one used by termux/termux-app#toggleKeepScreenOn().  Make sure you have the necessary permissions for using a WakeLock, declared in your AndroidManifest.xml:  And, since using a WakeLock can significantly increase battery consumption, check the impact of that approach for your application.",
                        "upvotes": "0"
                    }
                ],
                "post_id": "73dc87ab-927d-47ef-9d77-f045e0b585ec"
            },
            {
                "user": "Martin",
                "date_post": "Nov 12, 2022 at 21:45",
                "title_post": "React app setting background color before initial dom load",
                "description_post": "I am trying to make a website with react which has a different background color each time the user loads the page. These colors will be located inside a .json file. In all of my example proof-of-concepts for acomplishing this, the random color loads a couple seconds after the page is initially loaded. Meaning the default initial color flashes on screen before the new randomly chosen color appears.  See in the below gif what my problem is, where the default initial background color (pink) appears on the page before the new random color (red/blue/green) is chosen and appears. Is there any way I can make it so react choses and displays the random color on the page before the intiial dom load? Preventing the pink default color from flashing on screen? I've been able to accomplish this very easily with node.js html js css websites, but with react I can't quite figure it out.  here is my codesandbox link: codesandbox.io  Which loads this app.js file that handles the color picking logic:  Thanks  You can remove the initial value of colors, and then just run as below",
                "tags_post": [
                    "javascript",
                    "html",
                    "css",
                    "reactjs"
                ],
                "answers": [
                    {
                        "user": "Elvin",
                        "date_of_answer": "Nov 12, 2022 at 21:55",
                        "content": "You can remove the initial value of colors, and then just run as below",
                        "upvotes": "0"
                    }
                ],
                "post_id": "bab10c66-63cc-4fa1-b3ef-c46d96a52ed4"
            },
            {
                "user": "The Dead Man",
                "date_post": "Feb 6 at 22:34",
                "title_post": "How to dynamically create variables and use them in anchor?",
                "description_post": "I have a simple HTML page where I show the buttons, the buttons are added by the user, user can add multiple buttons. the buttons have anchors, which I need to pass variables.  So far I am doing it manually like this  CODE  Because users can have multiple buttons I do not want to add the variables to the anchors manually as I do know.  How can create those variables clickTag1, clickTag2 clickTag3 ..... etc based on available buttons and pass them to anchors?  Expected result  For example, if we have an array of buttons like this  The final html should be like this  I have removed the button because like people said you cant have buttons inside of anchor tags. I have reused your buttons variable. Looped through it and created a link for each button. You can modify this to be a button that calls a function that opens a page if you want to use buttons instead of anchors.  The script has also moved to the bottom so that the container exists before executing.",
                "tags_post": [
                    "javascript",
                    "html",
                    "jquery"
                ],
                "answers": [
                    {
                        "user": "Ollie Pugh",
                        "date_of_answer": "Feb 6 at 22:52",
                        "content": "I have removed the button because like people said you cant have buttons inside of anchor tags. I have reused your buttons variable. Looped through it and created a link for each button. You can modify this to be a button that calls a function that opens a page if you want to use buttons instead of anchors.  The script has also moved to the bottom so that the container exists before executing.",
                        "upvotes": "1"
                    }
                ],
                "post_id": "c112d9bd-2066-44c5-94db-955ccf094c36"
            },
            {
                "user": "drake035",
                "date_post": "Feb 2 at 20:31",
                "title_post": "Highlight.js Vue Plugin systematically ignores language value passed to it",
                "description_post": "Whether I call the plugin directly from my template section or mount it programmatically while passing to it a language prop value, the language I specify always ends up being ignored by the plugin who instead chooses himself a language.  From template section:  From script section (programmatically):  Here's how the plugin is imported in my main.js:  EDIT - updated version:  Beside the current highlightjs/vue-plugin issue 49, you have the 2021 highlightjs/vue-plugin issue 8 \"language setting is not effective\": there might be problems when different versions of Highlight.js are present in the project's dependency tree. A workaround suggested involved manually installing a specific version of Highlight.js (version 10.7.2), which resolved the issue for a user. But there might be compatibility concerns with newer versions of Highlight.js.\nThe a console.log(hljs.version);.  Make sure you import it explicitly in your main.js or wherever you configure Highlight.js:  Double-check if there is any code that might be overwriting the language prop or if the plugin has default behavior when it fails to recognize the specified language. That could happen if the language module was not imported.  Then try and implement a diagnostic script in your Vue project:  That way, you will see the currently used Highlight.js version. And you will check if the specified languages are correctly registered and available.\nYou can also test with this script if a simple JavaScript code snippet is correctly highlighted.  The goal is to see if the issue lies with language detection or plugin integration.",
                "tags_post": [
                    "vuejs3",
                    "prop",
                    "highlightjs"
                ],
                "answers": [
                    {
                        "user": "VonC",
                        "date_of_answer": "Feb 7 at 7:32",
                        "content": "Beside the current highlightjs/vue-plugin issue 49, you have the 2021 highlightjs/vue-plugin issue 8 \"language setting is not effective\": there might be problems when different versions of Highlight.js are present in the project's dependency tree. A workaround suggested involved manually installing a specific version of Highlight.js (version 10.7.2), which resolved the issue for a user. But there might be compatibility concerns with newer versions of Highlight.js.\nThe a console.log(hljs.version);.  Make sure you import it explicitly in your main.js or wherever you configure Highlight.js:  Double-check if there is any code that might be overwriting the language prop or if the plugin has default behavior when it fails to recognize the specified language. That could happen if the language module was not imported.  Then try and implement a diagnostic script in your Vue project:  That way, you will see the currently used Highlight.js version. And you will check if the specified languages are correctly registered and available.\nYou can also test with this script if a simple JavaScript code snippet is correctly highlighted.  The goal is to see if the issue lies with language detection or plugin integration.",
                        "upvotes": "0"
                    }
                ],
                "post_id": "736feeb6-d276-4912-ae8d-f4d26c0ed4d1"
            },
            {
                "user": "TylerH",
                "date_post": "Feb 16, 2023 at 3:48",
                "title_post": "How to ensure my dependencies use Safe Rust?",
                "description_post": "Is there a way to declare in the Cargo.toml that my project depend only on 3rd-party crates that guaranteed to be using Safe Rust transitively?  I am new to Rust and Rust is new to me. I haven't had a chance to try anything out yet.  First, check the crates.io documentation whenever the author(s) mention the usage of unsafe code. You can double-check it by searching for the unsafe keyword in the source code.  However, inspecting the crate's and its dependencies' source code is a tedious job. The tool called cargo-geiger provide statistics about unsafe usage in the crate and all its dependencies. After installing it, navigate to your Cargo.toml file and analyze it:  It will download and scans all dependencies, then assigns one of the three symbols to a crate:  Note that it provides only the usage of unsafe keyword. But for more thorough analysis, review the code with cargo-crev to verify the trustworthiness and the security vulnerabilities of package dependencies. Additionally, if you found an unsafe code, you can report to the safety-dance repository.  Once you checked your dependencies, it is time to assess your project as well. For start, catch common mistakes using the clippy linter tool:  Moreover, add the #![forbid(unsafe_code)] attribute to your files to communicate that unsafe code blocks are forbidden. I don't know if you can declare that your package (is guaranteed) to use safe Rust. But you can show a badge in the README.md file after eliminating all unsafe code:  It will help others to discover that your crate is safe.  Note that there is no 100% memory safety in Rust because the standard libraries use (with great caution) unsafe blocks. Sometimes it is unavoidable. In any case, you should always try to implement safe code, even if you lose a little performance gain.  Less bug, less maintenance pain, more tRust.  Further readings:",
                "tags_post": [
                    "rust",
                    "rust-cargo"
                ],
                "answers": [
                    {
                        "user": "P\u00e9ter Szilv\u00e1si",
                        "date_of_answer": "Feb 11 at 8:10",
                        "content": "First, check the crates.io documentation whenever the author(s) mention the usage of unsafe code. You can double-check it by searching for the unsafe keyword in the source code.  However, inspecting the crate's and its dependencies' source code is a tedious job. The tool called cargo-geiger provide statistics about unsafe usage in the crate and all its dependencies. After installing it, navigate to your Cargo.toml file and analyze it:  It will download and scans all dependencies, then assigns one of the three symbols to a crate:  Note that it provides only the usage of unsafe keyword. But for more thorough analysis, review the code with cargo-crev to verify the trustworthiness and the security vulnerabilities of package dependencies. Additionally, if you found an unsafe code, you can report to the safety-dance repository.  Once you checked your dependencies, it is time to assess your project as well. For start, catch common mistakes using the clippy linter tool:  Moreover, add the #![forbid(unsafe_code)] attribute to your files to communicate that unsafe code blocks are forbidden. I don't know if you can declare that your package (is guaranteed) to use safe Rust. But you can show a badge in the README.md file after eliminating all unsafe code:  It will help others to discover that your crate is safe.  Note that there is no 100% memory safety in Rust because the standard libraries use (with great caution) unsafe blocks. Sometimes it is unavoidable. In any case, you should always try to implement safe code, even if you lose a little performance gain.  Less bug, less maintenance pain, more tRust.  Further readings:",
                        "upvotes": "4"
                    }
                ],
                "post_id": "dfa07dff-5213-4762-bd33-f75889c6d4c8"
            },
            {
                "user": "Shaiwal Tripathi",
                "date_post": "Sep 27, 2021 at 3:42",
                "title_post": "Receiving Data from Machine using Socket",
                "description_post": "Issues I am facing  There's a few things here;",
                "tags_post": [
                    "c#",
                    "asp.net",
                    "sockets"
                ],
                "answers": [
                    {
                        "user": "Marc Gravell",
                        "date_of_answer": "Sep 27, 2021 at 4:58",
                        "content": "There's a few things here;",
                        "upvotes": "3"
                    }
                ],
                "post_id": "334aa6b6-e370-4f69-b9ef-0fa9beb7370e"
            },
            {
                "user": "marc_s",
                "date_post": "Jan 20 at 10:22",
                "title_post": "EF Core DbCommand duration vs CommandTimeout",
                "description_post": "I have to investigate a performance issue with SQL Server and EF Core and I noticed something strange in the log:  From what I know the CommandTimeout is measured in seconds but the DbCommand says it took the same amount in milliseconds.  What does DbCommand measure in fact? Was the same amount in milliseconds a coincidence with the same amount in seconds (I saw on the internet the same exception of timeout but the duration was different than command timeout even smaller actually)?  PS: I get this error:  The DbCommand timeout is indeed measured in seconds. This is the amount of time that the command will wait for a response from the database before it gives up and throws a timeout exception.  The time reported in the log message (Failed executing DbCommand (300,021ms)) is the actual time that the command took to execute, measured in milliseconds. This time includes the time it took to send the command to the database, the time the database took to execute the command, and the time it took to retrieve the results.  In your case, it seems like the command is taking longer to execute than the timeout value, which is why you're seeing the timeout exception. The fact that the execution time in milliseconds is similar to the timeout value in seconds is likely a coincidence.  The SqlException you're seeing is thrown when the command execution exceeds the CommandTimeout value. The Win32Exception is a more general exception that indicates a timeout occurred at the operating system level, which could be due to the SQL Server not responding or the operation taking too long.  To resolve this issue, you could try increasing the CommandTimeout value, optimizing your database query, or investigating if there are any performance issues with your SQL Server.",
                "tags_post": [
                    "entity-framework-core"
                ],
                "answers": [
                    {
                        "user": "Serhii",
                        "date_of_answer": "Feb 11 at 18:28",
                        "content": "The DbCommand timeout is indeed measured in seconds. This is the amount of time that the command will wait for a response from the database before it gives up and throws a timeout exception.  The time reported in the log message (Failed executing DbCommand (300,021ms)) is the actual time that the command took to execute, measured in milliseconds. This time includes the time it took to send the command to the database, the time the database took to execute the command, and the time it took to retrieve the results.  In your case, it seems like the command is taking longer to execute than the timeout value, which is why you're seeing the timeout exception. The fact that the execution time in milliseconds is similar to the timeout value in seconds is likely a coincidence.  The SqlException you're seeing is thrown when the command execution exceeds the CommandTimeout value. The Win32Exception is a more general exception that indicates a timeout occurred at the operating system level, which could be due to the SQL Server not responding or the operation taking too long.  To resolve this issue, you could try increasing the CommandTimeout value, optimizing your database query, or investigating if there are any performance issues with your SQL Server.",
                        "upvotes": "-1"
                    }
                ],
                "post_id": "70e4133b-cf4a-4655-8722-b7dd9a11a95c"
            },
            {
                "user": "Ladu anand",
                "date_post": "Feb 6 at 17:41",
                "title_post": "Spring Boot thin jar in multi module project giving error",
                "description_post": "I am having a multi module project in Spring Boot and trying to use thin jars , but it doesnt seem to work . Folder structure  pom.xml of app folder  pom.xml of module containing main class  other modules dont contain any spring boot maven plugin.  When I run mvn clean install -f , jars are created in target folder of each module ( very small size) but no target/thin/root directory is created in any module. Also when I start the jar of the module containing main class , I get below error :  I suppose you have a setup similar to:  Maven cannot resolve the parent POM for your application module, specifically pointing to an issue with ${revision} not being resolved. That might indicate a problem with property resolution in your multi-module setup, particularly if ${revision} is meant to be a dynamic versioning property.  Your configuration of the thin JAR plugins seems correct, but the error precedes its execution phase. So the issue is with the Maven's project structure resolution rather than the thin JAR mechanism itself.  Make sure that the ${revision}, ${spring-boot-maven-plugin.version}, and ${thin-jar.version} properties are correctly defined in your parent pom.xml or in a properties file that Maven can access. Properties should be defined in the parent POM to make sure they are inherited by child modules:  But if, as commented by khmarbaise, ${revision} is supposed to work with \"Maven CI Friendly Versions\", then do incorporate the Flatten Maven Plugin:  Execute Maven with the -X flag (e.g., mvn clean install -X) to get more detailed output. That can help identify where the resolution process fails.",
                "tags_post": [
                    "java",
                    "spring",
                    "spring-boot",
                    "maven"
                ],
                "answers": [
                    {
                        "user": "VonC",
                        "date_of_answer": "Feb 10 at 22:26",
                        "content": "I suppose you have a setup similar to:  Maven cannot resolve the parent POM for your application module, specifically pointing to an issue with ${revision} not being resolved. That might indicate a problem with property resolution in your multi-module setup, particularly if ${revision} is meant to be a dynamic versioning property.  Your configuration of the thin JAR plugins seems correct, but the error precedes its execution phase. So the issue is with the Maven's project structure resolution rather than the thin JAR mechanism itself.  Make sure that the ${revision}, ${spring-boot-maven-plugin.version}, and ${thin-jar.version} properties are correctly defined in your parent pom.xml or in a properties file that Maven can access. Properties should be defined in the parent POM to make sure they are inherited by child modules:  But if, as commented by khmarbaise, ${revision} is supposed to work with \"Maven CI Friendly Versions\", then do incorporate the Flatten Maven Plugin:  Execute Maven with the -X flag (e.g., mvn clean install -X) to get more detailed output. That can help identify where the resolution process fails.",
                        "upvotes": "0"
                    }
                ],
                "post_id": "daede512-341a-441f-8207-55c221b65768"
            },
            {
                "user": "arrmansa",
                "date_post": "Feb 8 at 5:17",
                "title_post": "Pruning nn.Linear weights inplace causes unexpected error, requires slightly weird workarounds. Need explanation",
                "description_post": "with error  I encountered this when trying to implement a paper on model pruning (Temporal Neuron Variance Pruning). I believe this has something to do with the autograd graph, but I have am not sure what exactly is going on. I've already seen the link on pruning and got my code working using the 3rd snippet. I am now trying to figure out why 1 and 2 did not work. Is there some explanation for why these almost identical code snippets work or fail?  Like you guessed, the issue is with the computational graph that gets created when you do backpropagation.  A better way to do pruning is found in this pytorch link: https://pytorch.org/tutorials/intermediate/pruning_tutorial.html  You generally don't play around with the input sizes; you just turn off some weights -- set them to zero. In the first case, i think it works because you reset the graph; in the second case case, its because you are setting the model parameters as the truncated version of the weights.",
                "tags_post": [
                    "python",
                    "machine-learning",
                    "pytorch",
                    "artificial-intelligence",
                    "autograd"
                ],
                "answers": [
                    {
                        "user": "Ashwath S",
                        "date_of_answer": "Feb 8 at 17:22",
                        "content": "Like you guessed, the issue is with the computational graph that gets created when you do backpropagation.  A better way to do pruning is found in this pytorch link: https://pytorch.org/tutorials/intermediate/pruning_tutorial.html  You generally don't play around with the input sizes; you just turn off some weights -- set them to zero. In the first case, i think it works because you reset the graph; in the second case case, its because you are setting the model parameters as the truncated version of the weights.",
                        "upvotes": "0"
                    }
                ],
                "post_id": "f47510b9-b7a1-46ba-b96b-1e829d2dd35c"
            },
            {
                "user": "progNewbie",
                "date_post": "Feb 7 at 12:10",
                "title_post": "Supabase: Invalid JWT after having app running for some time",
                "description_post": "I am calling  in my main.dart and later using this code to call an Edge-Function:  This works fine! But if my app is open for some time, it seems that my JWT expires and when I trigger the Edge-Function again, I get Invalid JWT as a response.  What do I have to do to make sure, that the auth.headers are renewed?  Thanks a lot!  You can call the refreshSession() method to make sure the token is fresh.",
                "tags_post": [
                    "jwt",
                    "supabase",
                    "supabase-flutter",
                    "edge-function",
                    "supabase-function"
                ],
                "answers": [
                    {
                        "user": "dshukertjr",
                        "date_of_answer": "Feb 9 at 7:16",
                        "content": "You can call the refreshSession() method to make sure the token is fresh.",
                        "upvotes": "1"
                    }
                ],
                "post_id": "34ec73be-a1fd-4217-b55c-9ce7a71479a7"
            },
            {
                "user": "Progman",
                "date_post": "Jan 21 at 9:47",
                "title_post": "Issues with Pywinusb.hid in Python: Unable to Send Feature Reports",
                "description_post": "I'm working on a Python script using pywinusb.hid to interact with an HID device. I'm attempting to send feature reports to control the device, but I seem to be encountering issues. Here's a snippet of my code:  I'm encountering issues with the feature reports, and I'm not sure why. The code runs without errors, but the device doesn't seem to respond as expected. Any insights or suggestions on how to troubleshoot and resolve this issue would be greatly appreciated.  I guess your problem might be related with async processing. Your code worked but response wasn't immediate. You can check pywinusb.hid.ReadInputReport. You can use ReadInputReport to obtain input reports from the device if it sends them after processing feature reports. This feature halt your script until a report is received, which would essentially synchronize communication to some degree.",
                "tags_post": [
                    "python",
                    "pywinusb"
                ],
                "answers": [
                    {
                        "user": "Can Per\u00e7in",
                        "date_of_answer": "Feb 11 at 17:58",
                        "content": "I guess your problem might be related with async processing. Your code worked but response wasn't immediate. You can check pywinusb.hid.ReadInputReport. You can use ReadInputReport to obtain input reports from the device if it sends them after processing feature reports. This feature halt your script until a report is received, which would essentially synchronize communication to some degree.",
                        "upvotes": "0"
                    }
                ],
                "post_id": "f8e42ae6-e273-451c-8f95-c15ac978e10e"
            },
            {
                "user": "Eve Ninnall",
                "date_post": "Dec 1, 2022 at 21:28",
                "title_post": "The svg is only as high as the inner window but when you scroll the window the svg scrolls with it",
                "description_post": "The answer that was just provided doesn't work.  In the code snippet you can see clearly the svg not filling the entire viewport.  I did not think or realize this would be so hard or difficult to figure out.  The SVG are the blue boxes, and the blue boxes are supposed to cover the entire screen to the bottom, where the red is.  I am so confused, I don't understand how to have the SVG fill the entire viewport.  Red color should be behind svg, svg should be covering entire viewport  When viewed like this, red should be behind the svg.  The entire svg should be viewable.  I am not sure why the background is over the svg, or how to fix that in the code.  Is there a way to fix that in the code?  https://jsfiddle.net/6aqjxf0b/1/  How do I fix that in the code?  html          Code Snippet:        Try removing \"overflow: auto;\" from your \".modal.open\" CSS, like this:  If it's not scrolled, you won't be seeing space below the 100%, and the SVG, which is at 100% height, will not be smaller than the visible area.  I worked on this for a day or two and this is the best solution I could find.  Only one minor mistake just place SVG inside <div class=\"modal-content\"> write now SVG out of this box with absolute position.  Make a separate block with overflow-y: auto; in your modal window.    ",
                "tags_post": [
                    "html",
                    "css",
                    "svg",
                    "background"
                ],
                "answers": [
                    {
                        "user": "Cybertine",
                        "date_of_answer": "2 days ago",
                        "content": "Try removing \"overflow: auto;\" from your \".modal.open\" CSS, like this:  If it's not scrolled, you won't be seeing space below the 100%, and the SVG, which is at 100% height, will not be smaller than the visible area.  I worked on this for a day or two and this is the best solution I could find.",
                        "upvotes": "0"
                    },
                    {
                        "user": "user3302090",
                        "date_of_answer": "yesterday",
                        "content": "Only one minor mistake just place SVG inside <div class=\"modal-content\"> write now SVG out of this box with absolute position.",
                        "upvotes": "0"
                    },
                    {
                        "user": "imhvost",
                        "date_of_answer": "8 hours ago",
                        "content": "Make a separate block with overflow-y: auto; in your modal window.    ",
                        "upvotes": "0"
                    }
                ],
                "post_id": "10395e13-4f65-4cdb-8e47-1e342be04efa"
            },
            {
                "user": "menethil",
                "date_post": "Feb 8 at 16:12",
                "title_post": "How to fix Angular NX project NG0203 error",
                "description_post": "I am struggling with the NG0203 error, while my colleagues are able to serve the project without any problem. I tried to upgrade and downgrade the versions of both Angular and Nx, but it did not work. Also, I tried to copy the entirety of the node_modules from one of my teammates, but still had no luck.I don't think it's related but I also checked the ports where i need to serve the apps on.  i have several angular applications with different versions and i dont experience any trouble with them thanks to NVM. Does anyone know what could be the root cause of this?  nx version 17.2 ng version 16.2 macOS 13.6.3 (22G436) - intel  i do make it sure that my project and packages are exactly same with my teammates. these all findings make the thing more mysterious to me.  i tried to downgrade and upgrade the nx and ng versions. also tried serve the project on node 16 and 18 versions. also checked several browsers.  i was able to serve the project on windows via node v18.19, then also tried to test this on another mac 2016 but it did not work either.  as so far it should be highlighted to you that this error arise when the inject() function is called outside of the allowed injection contexts.  so inject() function can be called within the constructor of a class to inject dependencies.  also check for any configuration issues in the project's angular.json file or any other relevant configuration files  please take a look at NG0203  as you highlighted that the sane code with the exactly same configration is working fine to others .so try the following trick and see if works.  Try calling npm version ng and compare results  The problem may be related to using npm package ng(Angular CLI) from devDependencies in package.json vs globally installed ng. Some IDE-s may automatically find locally installed to node_modules ng and ignore globally installed ng, hence when you run command which uses ng(and most npm scripts in Angular application use ng) from terminal of IDE vs regular terminal, version of ng may be different  Another possible cause of problem with versions may be caused by different OS users seeing different versions of globally installed npm package. For example, when terminal is called as super user, it sees PATH without some commands, which are added in ~/.bash_profile, and may use version of package from a different place",
                "tags_post": [
                    "angular",
                    "npm",
                    "nrwl-nx",
                    "nrwl",
                    "angular-module-federation"
                ],
                "answers": [
                    {
                        "user": "Rainy sidewalks",
                        "date_of_answer": "Feb 11 at 9:36",
                        "content": "as so far it should be highlighted to you that this error arise when the inject() function is called outside of the allowed injection contexts.  so inject() function can be called within the constructor of a class to inject dependencies.  also check for any configuration issues in the project's angular.json file or any other relevant configuration files  please take a look at NG0203  as you highlighted that the sane code with the exactly same configration is working fine to others .so try the following trick and see if works.",
                        "upvotes": "0"
                    },
                    {
                        "user": "Ivan Ivanyuk",
                        "date_of_answer": "2 days ago",
                        "content": "Try calling npm version ng and compare results  The problem may be related to using npm package ng(Angular CLI) from devDependencies in package.json vs globally installed ng. Some IDE-s may automatically find locally installed to node_modules ng and ignore globally installed ng, hence when you run command which uses ng(and most npm scripts in Angular application use ng) from terminal of IDE vs regular terminal, version of ng may be different  Another possible cause of problem with versions may be caused by different OS users seeing different versions of globally installed npm package. For example, when terminal is called as super user, it sees PATH without some commands, which are added in ~/.bash_profile, and may use version of package from a different place",
                        "upvotes": "0"
                    }
                ],
                "post_id": "682259ef-1c5f-4e36-82e0-1f37febce561"
            },
            {
                "user": "Alan Shortis",
                "date_post": "Feb 9 at 8:42",
                "title_post": "Issue with generic type in a react-hook-form component",
                "description_post": "I am trying to build a field array component in TypeScript that can work with more than one form. To do this, I am trying to use a generic to pass the form fields interface, but I can't quite get the types right (it is working, but has type issues).  If I import my interface (that describes my form's fields) and use it in place of T everything works as expected, but with the generic I get some errors. Here's what I have:  And the implementation:  I am seeing these errors:      The component functions as expected, I just can't get the types right. Any ideas?  You are very close! The following changes are required to make TypeScript understand how the data is flowing:  With the above changes, the following piece of code should work:  As tags should always be available as key in your form, you should replace FieldValues by PartialTagForm in Tags<T extends FieldValues>. Note that tags then also must be available in your IFormFields  For the first issue, you must define the shape of your type and provide it to the useFieldArray hook as follows:  doing this should also fix the second issue please try the above and post a reply with your update I'll try to edit the answer accordingly.",
                "tags_post": [
                    "reactjs",
                    "typescript",
                    "react-hook-form"
                ],
                "answers": [
                    {
                        "user": "Ruben",
                        "date_of_answer": "yesterday",
                        "content": "You are very close! The following changes are required to make TypeScript understand how the data is flowing:  With the above changes, the following piece of code should work:  As tags should always be available as key in your form, you should replace FieldValues by PartialTagForm in Tags<T extends FieldValues>. Note that tags then also must be available in your IFormFields",
                        "upvotes": "1"
                    },
                    {
                        "user": "Moussa Bistami",
                        "date_of_answer": "yesterday",
                        "content": "For the first issue, you must define the shape of your type and provide it to the useFieldArray hook as follows:  doing this should also fix the second issue please try the above and post a reply with your update I'll try to edit the answer accordingly.",
                        "upvotes": "0"
                    }
                ],
                "post_id": "b2de0a4b-a7d7-41d3-a217-5ed02bcca3fe"
            },
            {
                "user": "Stew",
                "date_post": "Feb 8 at 22:53",
                "title_post": "How can I remap Left \u2318 Command to Left Ctrl in VSCode on MacOS?",
                "description_post": "I am accustomed to mapping the left \u2318 Command key to Ctrl, supported by a configuration option in iTerm2, my default dev context.  I am learning VSCode and am wondering how to accomplish this mapping within that application.  I will upvote any answer that does the job, but in descending order of preference I seek a solution that:  *I use vscodevim so if there is a solution involving configuration of that extension, I would value such a solution.  Why?  I developed my muscle memory using PC-layout keyboards before switching predominantly Apple-layout keyboards. I also develop on multiple OSes and keyboard types, primarily in Vim, running in a terminal. I'd like the spatial location of key combinations to remain consistent across these contexts. Over on GitHub, other users are also seeking an answer to this question  Keybindings in VSCode allow you to remap actions within the editor but do not support remapping modifier keys at the OS or hardware level.  The vscodevim extension allows remapping keys within the context of Vim emulation (for Vim commands), but not the VSCode UI itself (not for general VSCode shortcuts, like saving a file or opening the command palette).  VSCode allows for extensive customization of keyboard shortcuts within the application itself through its keybindings.json file. However, it is limited to defining shortcuts for actions within VSCode and does not extend to modifying the behavior of the operating system's modifier keys.\nThat means you can reassign actions from using \u2318 to Ctrl within VSCode, but you cannot change the function of the \u2318 key to behave as a Ctrl key across the board within VSCode (even when limited to vscodevim).  For example, you could manually change shortcuts that typically use \u2318 on macOS to use Ctrl instead, through VSCode's Keyboard Shortcuts editor:  A potential, albeit partial workaround, could involve getting creative with macOS's built-in capabilities, such as creating custom shortcuts in System Preferences for specific actions in VSCode. However, this does not achieve a true remap of the \u2318 key to Ctrl and would be very limited in scope, applying only to specific actions rather than a comprehensive key behavior change.  You might also consider discussing with your IT department the possibility of making an exception for a tool like Karabiner-Elements, especially if it is important for your productivity and ergonomics.\nAlternatively, adapting to the default macOS shortcuts or customizing VSCode's shortcuts within the limitations outlined might be necessary.  For system-wide remapping of the \u2318 Command key to Ctrl, you could try and use external tools like Karabiner-Elements. That application allows you to remap keys at the OS level, affecting all applications, including VSCode.  Open Karabiner-Elements and go to the 'Simple Modifications' tab. Click 'Add item' and select your device from the dropdown.\nFor 'From key', choose left_command. For 'To key', choose left_control.  Again: that method would remap the key for all applications, so it affects your entire MacOS environment, not just VSCode.  If that is too inconvenient, you would need a tool like Hammerspoon, a powerful automation tool for macOS that can detect the currently active application and execute scripts accordingly.  You can use Hammerspoon to monitor when VSCode becomes the active window and then trigger a script to activate a specific Karabiner-Elements profile or configuration and deactivate it when VSCode loses focus.  Open ~/.hammerspoon/init.lua in your text editor to add your custom Lua script for application monitoring. That script checks if VSCode is the active application and could be expanded to activate/deactivate a Karabiner-Elements profile via a shell command.  You would also need to create scripts (e.g., activate_karabiner_profile.sh and deactivate_karabiner_profile.sh) that modify your Karabiner-Elements configuration to activate or deactivate the desired profile. That could involve using defaults commands to modify Karabiner's configuration files or using Karabiner's CLI if available.  Note: Karabiner-Elements does not directly support a CLI for dynamically switching profiles. You might need to directly manipulate its configuration files or explore alternative methods such as AppleScript or automating UI actions for profile switching.  As hinted in the GitHub issue ticket you linked, you can remap modifier keys at the system level. Ex. on Ventura, open the System Settings application, go to \"Keyboard\", then \"Keyboard Shortcuts\", then \"Modifier Keys\". Then you can switch cmd to send ctrl and ctrl to send cmd. If this is about muscle memory from non-mac usage (and it sounds like it is), then I'd recommend that over doing things on a per-application basis.",
                "tags_post": [
                    "macos",
                    "visual-studio-code"
                ],
                "answers": [
                    {
                        "user": "VonC",
                        "date_of_answer": "2 days ago",
                        "content": "Keybindings in VSCode allow you to remap actions within the editor but do not support remapping modifier keys at the OS or hardware level.  The vscodevim extension allows remapping keys within the context of Vim emulation (for Vim commands), but not the VSCode UI itself (not for general VSCode shortcuts, like saving a file or opening the command palette).  VSCode allows for extensive customization of keyboard shortcuts within the application itself through its keybindings.json file. However, it is limited to defining shortcuts for actions within VSCode and does not extend to modifying the behavior of the operating system's modifier keys.\nThat means you can reassign actions from using \u2318 to Ctrl within VSCode, but you cannot change the function of the \u2318 key to behave as a Ctrl key across the board within VSCode (even when limited to vscodevim).  For example, you could manually change shortcuts that typically use \u2318 on macOS to use Ctrl instead, through VSCode's Keyboard Shortcuts editor:  A potential, albeit partial workaround, could involve getting creative with macOS's built-in capabilities, such as creating custom shortcuts in System Preferences for specific actions in VSCode. However, this does not achieve a true remap of the \u2318 key to Ctrl and would be very limited in scope, applying only to specific actions rather than a comprehensive key behavior change.  You might also consider discussing with your IT department the possibility of making an exception for a tool like Karabiner-Elements, especially if it is important for your productivity and ergonomics.\nAlternatively, adapting to the default macOS shortcuts or customizing VSCode's shortcuts within the limitations outlined might be necessary.  For system-wide remapping of the \u2318 Command key to Ctrl, you could try and use external tools like Karabiner-Elements. That application allows you to remap keys at the OS level, affecting all applications, including VSCode.  Open Karabiner-Elements and go to the 'Simple Modifications' tab. Click 'Add item' and select your device from the dropdown.\nFor 'From key', choose left_command. For 'To key', choose left_control.  Again: that method would remap the key for all applications, so it affects your entire MacOS environment, not just VSCode.  If that is too inconvenient, you would need a tool like Hammerspoon, a powerful automation tool for macOS that can detect the currently active application and execute scripts accordingly.  You can use Hammerspoon to monitor when VSCode becomes the active window and then trigger a script to activate a specific Karabiner-Elements profile or configuration and deactivate it when VSCode loses focus.  Open ~/.hammerspoon/init.lua in your text editor to add your custom Lua script for application monitoring. That script checks if VSCode is the active application and could be expanded to activate/deactivate a Karabiner-Elements profile via a shell command.  You would also need to create scripts (e.g., activate_karabiner_profile.sh and deactivate_karabiner_profile.sh) that modify your Karabiner-Elements configuration to activate or deactivate the desired profile. That could involve using defaults commands to modify Karabiner's configuration files or using Karabiner's CLI if available.  Note: Karabiner-Elements does not directly support a CLI for dynamically switching profiles. You might need to directly manipulate its configuration files or explore alternative methods such as AppleScript or automating UI actions for profile switching.",
                        "upvotes": "1"
                    },
                    {
                        "user": "starball",
                        "date_of_answer": "yesterday",
                        "content": "As hinted in the GitHub issue ticket you linked, you can remap modifier keys at the system level. Ex. on Ventura, open the System Settings application, go to \"Keyboard\", then \"Keyboard Shortcuts\", then \"Modifier Keys\". Then you can switch cmd to send ctrl and ctrl to send cmd. If this is about muscle memory from non-mac usage (and it sounds like it is), then I'd recommend that over doing things on a per-application basis.",
                        "upvotes": "0"
                    }
                ],
                "post_id": "69081983-0993-46ae-845a-4e095d515665"
            },
            {
                "user": "Faust",
                "date_post": "Feb 10 at 1:15",
                "title_post": "Testing Nested Server Components",
                "description_post": "I've successfully tested one isolated server component by using an async it and awaiting the output of a call to the component as a plain function to pass into render:  ^ That works and passes.  But I also have a page.tsx serever component that renders <UserData /> nested within it:  ... and if I try the same technique to test this component, i.e.:  ^ This does't work -- I get an error that reads:  How can we test nested server components? I want a solution that allows me to render both the parent and descendent server component in a unit test, without mocking one or the other.  Your Page component asynchronously imports and renders UserData, which leads to the error you are seeing because React expects all children to be resolved before they are rendered.  In your case: render a component (<UserData />) that is the result of an async function directly within another component's return statement. React expects all children to be elements, strings, numbers, or arrays thereof, not Promises.  To test nested server components, you need to make sure all asynchronous operations are completed before attempting to render the component tree. However, React does not natively support rendering asynchronous components directly in tests. You need to resolve these promises manually or use a testing strategy that accommodates server components.  Since you mentioned wanting to render both the parent and descendant server components without mocking, you will need to make sure your test environment can handle asynchronous components properly.  React Server Components are designed to be rendered on the server and then streamed to the client.\nIf you are using a tool like Next.js, which has built-in support for React Server Components, you might need to rely on end-to-end testing tools like Playwright or Cypress to fully test these components as they would be used in a production environment.  However, if you are looking for a unit test approach, and assuming you have control over the UserData and Page component's export to make them testable in isolation, you might try something like this:  That would look like:  That would assume a utility renderServerComponent that can handle the asynchronous nature of server components (which might not be supported).  Consider also the question \"Objects are not valid as a React child (found: [object Promise])\", which is also attempting to directly use the result of an asynchronous operation (a Promise) as a React component's child, which React does not support.  It highlights good practices like:  In your case:  Here, UserData is assumed to be a component that can accept data as props. The async data fetching is handled inside useEffect, and the state is updated with the fetched data, which triggers a re-render of Page with the actual data.  You would use testing utilities that allow for asynchronous operations and state changes to be awaited and observed. Tools like React Testing Library, which do provide ways to wait for elements to appear as a result of asynchronous operations completing.  Given the updated Page component, which fetches data asynchronously and then sets it into state, a test might look something like this:  But, again, here the UserData function is mocked to return a resolved promise with mock data immediately, which simulates fetching data from an API without the need for actual network requests. That might not be what you want.  The waitFor function from React Testing Library is used to wait for the component to update based on the asynchronous operation. That is key for testing components that depend on asynchronous data fetching.  After waiting for the asynchronous operation to complete, assertions are made to check that the component correctly renders the fetched data. That could involve checking for specific text, elements, or attributes that indicate the presence of the expected data.",
                "tags_post": [
                    "reactjs",
                    "jestjs",
                    "react-testing-library",
                    "react-server-components",
                    "next.js14"
                ],
                "answers": [
                    {
                        "user": "VonC",
                        "date_of_answer": "yesterday",
                        "content": "Your Page component asynchronously imports and renders UserData, which leads to the error you are seeing because React expects all children to be resolved before they are rendered.  In your case: render a component (<UserData />) that is the result of an async function directly within another component's return statement. React expects all children to be elements, strings, numbers, or arrays thereof, not Promises.  To test nested server components, you need to make sure all asynchronous operations are completed before attempting to render the component tree. However, React does not natively support rendering asynchronous components directly in tests. You need to resolve these promises manually or use a testing strategy that accommodates server components.  Since you mentioned wanting to render both the parent and descendant server components without mocking, you will need to make sure your test environment can handle asynchronous components properly.  React Server Components are designed to be rendered on the server and then streamed to the client.\nIf you are using a tool like Next.js, which has built-in support for React Server Components, you might need to rely on end-to-end testing tools like Playwright or Cypress to fully test these components as they would be used in a production environment.  However, if you are looking for a unit test approach, and assuming you have control over the UserData and Page component's export to make them testable in isolation, you might try something like this:  That would look like:  That would assume a utility renderServerComponent that can handle the asynchronous nature of server components (which might not be supported).  Consider also the question \"Objects are not valid as a React child (found: [object Promise])\", which is also attempting to directly use the result of an asynchronous operation (a Promise) as a React component's child, which React does not support.  It highlights good practices like:  In your case:  Here, UserData is assumed to be a component that can accept data as props. The async data fetching is handled inside useEffect, and the state is updated with the fetched data, which triggers a re-render of Page with the actual data.  You would use testing utilities that allow for asynchronous operations and state changes to be awaited and observed. Tools like React Testing Library, which do provide ways to wait for elements to appear as a result of asynchronous operations completing.  Given the updated Page component, which fetches data asynchronously and then sets it into state, a test might look something like this:  But, again, here the UserData function is mocked to return a resolved promise with mock data immediately, which simulates fetching data from an API without the need for actual network requests. That might not be what you want.  The waitFor function from React Testing Library is used to wait for the component to update based on the asynchronous operation. That is key for testing components that depend on asynchronous data fetching.  After waiting for the asynchronous operation to complete, assertions are made to check that the component correctly renders the fetched data. That could involve checking for specific text, elements, or attributes that indicate the presence of the expected data.",
                        "upvotes": "2"
                    }
                ],
                "post_id": "7bca6083-38fc-439a-bae4-9307acaaf049"
            },
            {
                "user": "P1x",
                "date_post": "Feb 8 at 21:55",
                "title_post": "Scale image on width and crop on height with Coil",
                "description_post": "I've a ImageView with fixed height (400dp) and variable width (match parent). I'm using Coil to load the content from the web.  I've some images that are landescape and other that are portrait.  I want to always fit the width and crop the height:    I can't get that.  If I use CenterCrop, the image is cropped on the width if is too large  If I use CenterFit, the image doesn't fit the width if it's too tall  What's the best way to obtain the desired behaviour?  I tried using all the possible ScaleType, both on the ImageView and the Coil loader.  Make a custom ImageView like so:  Use it in your layout like this:  And load the image using Coil to this CustomImageView.  Replace com.example with your package name.",
                "tags_post": [
                    "android",
                    "imageview",
                    "coil"
                ],
                "answers": [
                    {
                        "user": "Squti",
                        "date_of_answer": "yesterday",
                        "content": "Make a custom ImageView like so:  Use it in your layout like this:  And load the image using Coil to this CustomImageView.  Replace com.example with your package name.",
                        "upvotes": "0"
                    }
                ],
                "post_id": "96f66645-cedf-4c6d-a809-77807431425f"
            },
            {
                "user": "user20650",
                "date_post": "Feb 9 at 14:15",
                "title_post": "DiagrammeR flowchart with horizontal aligments of nodes within and between subgraphs",
                "description_post": "I need to create a flowchart and below is a reproducible example in R:  The output is shown below:    I am seeking help to revise the codes to achieve the following changes (all marked in red):  Thank you very much!  Adding invisible nodes and edges:  ",
                "tags_post": [
                    "r",
                    "graphviz",
                    "diagrammer"
                ],
                "answers": [
                    {
                        "user": "CPB",
                        "date_of_answer": "2 days ago",
                        "content": "Adding invisible nodes and edges:  ",
                        "upvotes": "2"
                    }
                ],
                "post_id": "76b73253-2483-4a45-83f1-34151387cf69"
            },
            {
                "user": "Hadi Farhat",
                "date_post": "Jan 24 at 10:30",
                "title_post": "Understanding React Dev Tools Profiler results",
                "description_post": "I'm profiling a react native app and I'm struggling to understand the outcome data. In the screenshot below, you can see the list of components that have been rendered at a specific commit, 12.6s. You can also see that the render duration took 556.5ms. What's confusing me is that if you add up the duration of each component listed, it will be nowhere near 556.5ms.  If I have a look at the Ranked chart instead, I can see that the component that took the longest to render is the Context.Consumer which only took 4.8ms. The more you scroll down this chart, the less time it will take the components to render.  I can't see how these components' render time would amount to 556.5ms.  Can someone please explain?  I'm trying to locate the component that's slowing down the app render duration.  The total render duration is not simply the sum of the render times of the components you see in this graphs because of several reasons I think of:  Another thing is that if you are fetching data from an external source or API, the delay might be network-related rather than due to component rendering.  Oh and also take a look at optimizing rerendering of components.",
                "tags_post": [
                    "reactjs",
                    "react-native"
                ],
                "answers": [
                    {
                        "user": "Daniel Guedes",
                        "date_of_answer": "yesterday",
                        "content": "The total render duration is not simply the sum of the render times of the components you see in this graphs because of several reasons I think of:  Another thing is that if you are fetching data from an external source or API, the delay might be network-related rather than due to component rendering.  Oh and also take a look at optimizing rerendering of components.",
                        "upvotes": "0"
                    }
                ],
                "post_id": "9cf3d7b7-965c-419b-8931-0c9c005d9b59"
            },
            {
                "user": "yunzen",
                "date_post": "Dec 7, 2023 at 12:19",
                "title_post": "Inconsistent behavior between browsers with deeply nested subgrid",
                "description_post": "When I nest a subgrid inside a padded subgrid inside a grid, I get inconsistet behavior between the different browsers.  This is the code:      Which one would be the correct behavior as intended by the specifications? I'd like it to be the Chrome behavior.  For one, there are tons of inconsistencies among browsers rendering CSS and not just for subgrid which is still relatively new.  Two, I can't see your browser image examples so I made a fiddle for testing.  https://jsfiddle.net/Ltp4m7fw/  Three, I'm not real familiar with subgrid (yet), so there's probably an even better approach. However, I got it to look the same in Chrome and Firefox (Windows) by overriding a couple grid elements in your CSS.  Perhaps the issue is not declaring width on the inner items? Some browsers are picky about that. I used calc and margin to mimic the layout of \"Padded content\".  Not exactly sure what you are trying to achieve, but hopefully this gets the ball rolling.    ",
                "tags_post": [
                    "css",
                    "cross-browser",
                    "subgrid"
                ],
                "answers": [
                    {
                        "user": "jottin",
                        "date_of_answer": "22 hours ago",
                        "content": "For one, there are tons of inconsistencies among browsers rendering CSS and not just for subgrid which is still relatively new.  Two, I can't see your browser image examples so I made a fiddle for testing.  https://jsfiddle.net/Ltp4m7fw/  Three, I'm not real familiar with subgrid (yet), so there's probably an even better approach. However, I got it to look the same in Chrome and Firefox (Windows) by overriding a couple grid elements in your CSS.  Perhaps the issue is not declaring width on the inner items? Some browsers are picky about that. I used calc and margin to mimic the layout of \"Padded content\".  Not exactly sure what you are trying to achieve, but hopefully this gets the ball rolling.    ",
                        "upvotes": "0"
                    }
                ],
                "post_id": "0d8e1d9e-795c-453f-845d-e21882c7a063"
            },
            {
                "user": "James Z",
                "date_post": "Feb 9 at 12:26",
                "title_post": "unable to upload a specific file using ansible uri module",
                "description_post": "I'm able to upload simple text files to Jrog artifactory using ansible. However, the same code fails when I try to upload a file of different type.  Below are the type of files.  Ansible playbook:  Output:  As you can see from the output /tmp/file1.txt got uploaded successfully.  I also, tried to upload using src attribute instead of body but that too gets me error.  Output:  The body parameter of the Ansible's uri module handles expects a string, but when uploading binary files like a .zip or .tar.gz, you are essentially trying to load binary data into a string, which leads to encoding issues as seen in the error messages.  For binary files, it is essential to make sure the data is not being interpreted or modified, which is where the src parameter should come in.\nHowever, the uri module does not directly support binary file uploads using a src parameter like you might find in other modules (e.g., copy).  That would leave, as a workaround, using the command or shell module to execute a curl command, which is capable of handling binary data uploads effectively.  That uses curl to perform the file upload, leveraging its ability to handle binary data without the encoding issues encountered with the uri module.\nThe --fail, --silent, and --show-error flags are used to control curl's output and error handling, making it easier to manage within Ansible.  Assuming that an OLAM (Oracle Linux Automation Manager) Docker runner would include Python, you can try and use Python's requests library, which might need to be installed if not already available.\nOr, you can refine the Python one-liner to remain purely based on Python's standard library to avoid external dependencies:  Again, this assumes the Python environment is properly configured within your OLAM Docker runner to execute these commands.\nThat should be compatible with environments where utilities like curl are not available, but where Python is installed.",
                "tags_post": [
                    "file-upload",
                    "ansible",
                    "runtime-error",
                    "uri",
                    "artifactory"
                ],
                "answers": [
                    {
                        "user": "VonC",
                        "date_of_answer": "2 days ago",
                        "content": "The body parameter of the Ansible's uri module handles expects a string, but when uploading binary files like a .zip or .tar.gz, you are essentially trying to load binary data into a string, which leads to encoding issues as seen in the error messages.  For binary files, it is essential to make sure the data is not being interpreted or modified, which is where the src parameter should come in.\nHowever, the uri module does not directly support binary file uploads using a src parameter like you might find in other modules (e.g., copy).  That would leave, as a workaround, using the command or shell module to execute a curl command, which is capable of handling binary data uploads effectively.  That uses curl to perform the file upload, leveraging its ability to handle binary data without the encoding issues encountered with the uri module.\nThe --fail, --silent, and --show-error flags are used to control curl's output and error handling, making it easier to manage within Ansible.  Assuming that an OLAM (Oracle Linux Automation Manager) Docker runner would include Python, you can try and use Python's requests library, which might need to be installed if not already available.\nOr, you can refine the Python one-liner to remain purely based on Python's standard library to avoid external dependencies:  Again, this assumes the Python environment is properly configured within your OLAM Docker runner to execute these commands.\nThat should be compatible with environments where utilities like curl are not available, but where Python is installed.",
                        "upvotes": "2"
                    }
                ],
                "post_id": "541381d7-3136-4cea-aa94-2f86fbf4ae54"
            },
            {
                "user": "Carlene12War",
                "date_post": "Feb 9 at 23:15",
                "title_post": "Different date in local and the server java date time",
                "description_post": "When I run below code which converts a xml date to java date, it prints different value(CST) in local vs different value(UTC) in the server running the same code, what could be reason for it? How can I always print this date in CST format which I am getting in my local. I can't use latest java date API and have to use XML based date.  Date: Fri Feb 09 01:57:33 CST 2024 - local output(Intellij - my mac time zone CST)  Date: Fri Feb 09 07:57:33 UTC 2024 - server output(https://www.jdoodle.com/online-java-compiler)  I need to store the date in america/chicago timezone irrespective of the user location and I have no control over the database query  If handed a XMLGregorianCalendar, convert to modern class.  If handed text in standard ISO 8601 format with offset-from-UTC, parse as an OffsetDateTime object.  Convert a XMLGregorianCalendar to a java.util.Date by way of java.time:  You are using terribly flawed date-time classes that are now legacy. Avoid XMLGregorianCalendar, GregorianCalendar, Calendar, SimpleDateFormat, and both Date classes. They were years ago supplanted by the modern java.time classes defined in JSR 310.  Among its many flaws is that java.util.Date#toString lies to you. That method interjects the JVM\u2019s current default time zone while generating text to represent the UTC value of the object.  When handed a XMLGregorianCalendar object, immediately convert to its modern replacement, java.time.ZonedDateTime by way of java.util.GregorianCalendar.  If you want to adjust that moment to be seen in a different time zone, apply a ZoneId to produce another ZonedDateTime. The java.time classes are immutable, so you get a new object rather than changing the original.  Generate localized text.  If you need to represent the moment in a ZonedDateTime as a java.util.Date to interoperate with old code not yet updated to java.time, extract an Instant. Pass that to java.util.Date.from. Both Instant and java.util.Date represent a point on the timeline as seen with an offset from UTC of zero hours-minutes-seconds. The legacy class resolves to milliseconds while the modern class resolves to nanoseconds.  For a point in time in your database use UTC, universal time. And to make sure that your database knows that it is in UTC, use timestamp with time zone data type.  You may think that storing time in your local time zone, America/Chicago, is simpler and more suited to your purpose. Think again. While your app is designed for that time zone at the moment, who can guarantee that it won\u2019t be used by users in other locations of the US at some point in the future? That the component you\u2019re coding won\u2019t be reused in some other program some other time? If this is for a school project to be thrown out after exams, a school project is a very good place to train best practices. Best practice here is to store UTC time.  If furthermore using timestamp without time zone or datetime in the database, a possibly minor problem is that times in America/Chicago time zone are occasionally ambiguous. Every year in the beginning of November summer time (DST) ends and the clocks are turned an hour back. Last 5 November at 2 AM, for example, clocks were turned back to 1 even though it had already been 1 AM an hour earlier. So when you retrieve a time between 1 and 2 in the night from the database, you have no way of knowing whether summer time (CDT) or standard time (CST) was intended. Also sorting such times is bound to mix them between each other. UTC does not use summer time, hence hasn\u2019t got this problem.  Different RDBMSs have different notions of timestamp with time zone. Your DB2 stores a UTC offset with the timestamp. Others store time in UTC and when necessary convert to and from some local time zone on storing and retrieving, really only giving us \"timestamp with UTC time zone\", which is fine too. I suggest you always store offset 0 (zero). Yet a few allow you to store a time zone ID such as America/Chicago. Use Etc/UTC here. In all cases the type is fine for your purpose.  I understand that your requirement to store time in America/Chicago time zone is fixed. So store an OffsetDateTime with the correct UTC offset (-6 or -5 hours) into your DB2 timestamp with time zone column. If timestamp without time zone (or datetime in other RDBMSs) is dictated from others, store a LocalDateTime. First let\u2019s get the conversion from XMLGregorianCalendar right:  Caveat: My conversion has milliseconds precision even though both XMLGregorianCalendar and OffsetDateTime have finer precision. If you need to preserve any finer precision than milliseconds from XML, I suggest:  Let\u2019s try the conversion method out:  Output:  If instead you need to convert to LocalDateTime, replace each of the two lines calling toOffsetDeteTime() with .toLocalDateTime();.  To store in your database use something like the following, assuming you are using JDBC:  If using timestamp wthout time zone and therefore LocalDateTime, just pass your LocalDateTime to setObject() in exactly the same way.  If using Java 6 or 7, use the backport of java.time named ThreeTen Backport, link at the bottom. In this case you can\u2019t directly pass the java.time objects to your PreparedStatement. One option is to format into strings that you pass to PreparedStatement.setString(). If using Java 5, use Joda-Time in a similar manner.  If for some reason I can\u2019t guess you are forced to use one of the problematic and outdated Date classes, use the conversion you already have. Configure your database session to use America/Chicago time zone. I don\u2019t understand the logic in this configuration belonging to the session, to me it rather belongs to the database column; but most SQL databases offer it as a setting on the session. Search for how it\u2019s done with your brand of database engine/RDBMS. I include a link for DB2 below to get you started. The DB2 \u201csession time zone\u201d is a mere offset from UTC, so when dealing with times in both standard time and summer time, you will need to set it for each value stored.  Or via the JVM default time zone: The really dirty solution is to set the default time zone of your JVM independent of the server OS time zone. Beware that this will affect the entire Java program and may have unwanted effects in other parts of it. I expect it to control the time zone used to converting Date to either of the database timestamp data types, though (I have not tested).  Either start your server program with a command line option for the purpose, like for example:  Or set the property from within your code, before doing any date and time work:  If none of the above is viable in your setup, you need a way to compensate for the fact that your server JVM and your database disagree about time zone and the Date is therefore converted incorrectly when stored. The trick that I think you used in your own answer seems to work, only please be aware that we are doing a deliberately incorrect conversion to compensate for the opposite incorrect conversion taking place out of our control when storing the Date. If that were me, I would want to make this very clear in the code, or anyone reading it in the future may be severely confused and may also try to \u201ccorrect\u201d what they may take to be an unintentional error. You can use your own conversion or mine or mix them somehow. Here\u2019s mine:  Converting the same two XMLGregorianCalendar objects as before in UTC time zone gives the following results:  You see that the Date objects are printed in UTC. Since the times are as expected, this means that the Dates are 6 hours off from CST, so incorrect as they should. The date and the times printed are also the ones that are stored to the database, which is what you wanted.",
                "tags_post": [
                    "java",
                    "date",
                    "datetime",
                    "gregorian-calendar",
                    "xmlgregoriancalendar"
                ],
                "answers": [
                    {
                        "user": "Basil Bourque",
                        "date_of_answer": "Feb 11 at 0:08",
                        "content": "If handed a XMLGregorianCalendar, convert to modern class.  If handed text in standard ISO 8601 format with offset-from-UTC, parse as an OffsetDateTime object.  Convert a XMLGregorianCalendar to a java.util.Date by way of java.time:  You are using terribly flawed date-time classes that are now legacy. Avoid XMLGregorianCalendar, GregorianCalendar, Calendar, SimpleDateFormat, and both Date classes. They were years ago supplanted by the modern java.time classes defined in JSR 310.  Among its many flaws is that java.util.Date#toString lies to you. That method interjects the JVM\u2019s current default time zone while generating text to represent the UTC value of the object.  When handed a XMLGregorianCalendar object, immediately convert to its modern replacement, java.time.ZonedDateTime by way of java.util.GregorianCalendar.  If you want to adjust that moment to be seen in a different time zone, apply a ZoneId to produce another ZonedDateTime. The java.time classes are immutable, so you get a new object rather than changing the original.  Generate localized text.  If you need to represent the moment in a ZonedDateTime as a java.util.Date to interoperate with old code not yet updated to java.time, extract an Instant. Pass that to java.util.Date.from. Both Instant and java.util.Date represent a point on the timeline as seen with an offset from UTC of zero hours-minutes-seconds. The legacy class resolves to milliseconds while the modern class resolves to nanoseconds.",
                        "upvotes": "3"
                    },
                    {
                        "user": "Anonymous",
                        "date_of_answer": "5 hours ago",
                        "content": "For a point in time in your database use UTC, universal time. And to make sure that your database knows that it is in UTC, use timestamp with time zone data type.  You may think that storing time in your local time zone, America/Chicago, is simpler and more suited to your purpose. Think again. While your app is designed for that time zone at the moment, who can guarantee that it won\u2019t be used by users in other locations of the US at some point in the future? That the component you\u2019re coding won\u2019t be reused in some other program some other time? If this is for a school project to be thrown out after exams, a school project is a very good place to train best practices. Best practice here is to store UTC time.  If furthermore using timestamp without time zone or datetime in the database, a possibly minor problem is that times in America/Chicago time zone are occasionally ambiguous. Every year in the beginning of November summer time (DST) ends and the clocks are turned an hour back. Last 5 November at 2 AM, for example, clocks were turned back to 1 even though it had already been 1 AM an hour earlier. So when you retrieve a time between 1 and 2 in the night from the database, you have no way of knowing whether summer time (CDT) or standard time (CST) was intended. Also sorting such times is bound to mix them between each other. UTC does not use summer time, hence hasn\u2019t got this problem.  Different RDBMSs have different notions of timestamp with time zone. Your DB2 stores a UTC offset with the timestamp. Others store time in UTC and when necessary convert to and from some local time zone on storing and retrieving, really only giving us \"timestamp with UTC time zone\", which is fine too. I suggest you always store offset 0 (zero). Yet a few allow you to store a time zone ID such as America/Chicago. Use Etc/UTC here. In all cases the type is fine for your purpose.  I understand that your requirement to store time in America/Chicago time zone is fixed. So store an OffsetDateTime with the correct UTC offset (-6 or -5 hours) into your DB2 timestamp with time zone column. If timestamp without time zone (or datetime in other RDBMSs) is dictated from others, store a LocalDateTime. First let\u2019s get the conversion from XMLGregorianCalendar right:  Caveat: My conversion has milliseconds precision even though both XMLGregorianCalendar and OffsetDateTime have finer precision. If you need to preserve any finer precision than milliseconds from XML, I suggest:  Let\u2019s try the conversion method out:  Output:  If instead you need to convert to LocalDateTime, replace each of the two lines calling toOffsetDeteTime() with .toLocalDateTime();.  To store in your database use something like the following, assuming you are using JDBC:  If using timestamp wthout time zone and therefore LocalDateTime, just pass your LocalDateTime to setObject() in exactly the same way.  If using Java 6 or 7, use the backport of java.time named ThreeTen Backport, link at the bottom. In this case you can\u2019t directly pass the java.time objects to your PreparedStatement. One option is to format into strings that you pass to PreparedStatement.setString(). If using Java 5, use Joda-Time in a similar manner.  If for some reason I can\u2019t guess you are forced to use one of the problematic and outdated Date classes, use the conversion you already have. Configure your database session to use America/Chicago time zone. I don\u2019t understand the logic in this configuration belonging to the session, to me it rather belongs to the database column; but most SQL databases offer it as a setting on the session. Search for how it\u2019s done with your brand of database engine/RDBMS. I include a link for DB2 below to get you started. The DB2 \u201csession time zone\u201d is a mere offset from UTC, so when dealing with times in both standard time and summer time, you will need to set it for each value stored.  Or via the JVM default time zone: The really dirty solution is to set the default time zone of your JVM independent of the server OS time zone. Beware that this will affect the entire Java program and may have unwanted effects in other parts of it. I expect it to control the time zone used to converting Date to either of the database timestamp data types, though (I have not tested).  Either start your server program with a command line option for the purpose, like for example:  Or set the property from within your code, before doing any date and time work:  If none of the above is viable in your setup, you need a way to compensate for the fact that your server JVM and your database disagree about time zone and the Date is therefore converted incorrectly when stored. The trick that I think you used in your own answer seems to work, only please be aware that we are doing a deliberately incorrect conversion to compensate for the opposite incorrect conversion taking place out of our control when storing the Date. If that were me, I would want to make this very clear in the code, or anyone reading it in the future may be severely confused and may also try to \u201ccorrect\u201d what they may take to be an unintentional error. You can use your own conversion or mine or mix them somehow. Here\u2019s mine:  Converting the same two XMLGregorianCalendar objects as before in UTC time zone gives the following results:  You see that the Date objects are printed in UTC. Since the times are as expected, this means that the Dates are 6 hours off from CST, so incorrect as they should. The date and the times printed are also the ones that are stored to the database, which is what you wanted.",
                        "upvotes": "2"
                    },
                    {
                        "user": "Carlene12War",
                        "date_of_answer": "yesterday",
                        "content": "",
                        "upvotes": "0"
                    }
                ],
                "post_id": "7f9ff87d-19b7-40d1-baa0-84e7815d2d99"
            },
            {
                "user": "pzrq",
                "date_post": "Jan 3, 2023 at 14:13",
                "title_post": "AWS CDK How can I add an existing usage plan to api stage",
                "description_post": "CDK documentation define that I can import an external usage plan through the static function named fromUsagePlanId but this returns an Interface IUsagePlan but which interface doesn't have the method addApiStage to attach my Api and its stage.  my snippet code:  I tried to search a cfn level 1 of cloudformation to do that, but I couldn't find out. How can I use method addApiStage of the constructor UsagePlan with the interface IUsagePlan or some idea of how can I add mi api to Usage plan existing?  There are several ways you can achieve this, dependent on how the resources were created in the first place (Click-ops or via CloudFormation).",
                "tags_post": [
                    "typescript",
                    "amazon-web-services",
                    "aws-api-gateway",
                    "aws-cdk",
                    "infrastructure-as-code"
                ],
                "answers": [
                    {
                        "user": "Korgen",
                        "date_of_answer": "yesterday",
                        "content": "There are several ways you can achieve this, dependent on how the resources were created in the first place (Click-ops or via CloudFormation).",
                        "upvotes": "0"
                    }
                ],
                "post_id": "9f197ea4-0eda-4b23-b609-11a86f1ad43c"
            }
        ]
    },
    reducers: {
        addQuestion: (state, action) => {
            state.questions.push(action.payload);
        },
        removeQuestion: (state, action) => {
            state.questions = state.questions.filter(
                (question) => question.id !== action.payload
            );
        },
        searchQuestion: (state, action) => {

            const items = state.questions.filter(
                (question) => question?.title_post.toLowerCase().includes(action.payload.toLowerCase())
                );

            state.searchedQuestions = items;
            console.log(state.searchedQuestions);

        },
    },
    extraReducers: (builder) => {
        // extraReducers
    }, 
});

export const { addQuestion, removeQuestion, searchQuestion } = QuestionsSlice.actions;
export default QuestionsSlice.reducer;
