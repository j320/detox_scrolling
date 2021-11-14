# This is a mini-repository to reproduce FlatList and scrolling issues identified on Detox, especially when using Android.

# Currently, iOS hangs when running Detox so issues have to be reproduced using Android, any suggestions on fixing iOS are welcome.

# Build the app:

# Android:

    yarn android:build

# iOS:

    yarn ios:build

# Run full test suite:

# Android:

    yarn android:test

# iOS:

    yarn iOS:test

# Run scrolling to FlatList edge test

# Android:

    yarn android:test:scrollToEdge

# iOS:

    yarn ios:test:scrollToEdge

# Run scrolling to element, both on FlatList and normal ScrollView tests:

# Android:

    yarn android:test:scrollToElement

# iOS:

    yarn ios:test:scrollToElement
