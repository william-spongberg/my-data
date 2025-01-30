// TODO: tick off files that have been uploaded
// thanks tree.nathanfriend.com!

export const instaFolders = `
Currently supported files are marked with a checkmark (✅). All other files are ignored.
.
└── instagram-user/
  ├── ads_information/
  │   ├── ads_and_topics/
  │   │   ├── ads_viewed.json ✅
  │   │   ├── posts_viewed.json ✅
  │   │   ├── posts_you're_not_interested_in.json
  │   │   ├── profiles_you're_not_interested_in.json
  │   │   ├── suggested_profiles_viewed.json
  │   │   └── videos_watched.json ✅
  │   └── instagram_ads_and_businesses/
  │       ├── ads_about_meta.json
  │       └── other_categories_used_to_reach_you.json ✅
  ├── apps_and_websites_of_of_instagram/
  │   └── apps_and_websites/
  │       ├── your_activity_off_meta_technologies.json ✅
  │       └── your_activity_off_meta_technologies_settings.json
  ├── connections/
  │   └── followers_and_following/
  │       ├── blocked_profiles.json
  │       ├── follow_requests_you've_received.json
  │       ├── followers_1.json
  │       ├── following.json
  │       ├── pending_follow_requests.json
  │       ├── recent_follow_requests.json
  │       ├── recently_unfollowed_profiles.json
  │       ├── removed_suggestions.json
  │       └── restricted_profiles.json
  ├── media/
  │   ├── archived_posts/
  │   │   └── [post_ids]/
  │   │       └── [photo_ids]
  │   ├── posts/
  │   │   └── [post_ids]/
  │   │       └── [photo_ids]
  │   ├── profile/
  │   │   └── [post_id]/
  │   │       └── [profile_pic_id]
  │   └── stories/
  │       └── [post_ids]/
  │           └── [photo_ids]
  ├── personal_information/
  │   ├── autofill_information/
  │   │   └── in-app_browser_autofill_settings.json
  │   ├── device_information/
  │   │   ├── camera_information.json
  │   │   ├── devices.json
  │   │   └── two-factor_authentication.json
  │   ├── information_about_you/
  │   │   ├── locations_of_interest.json
  │   │   └── profile_based_in.json
  │   └── personal_information/
  │       ├── instagram_profile_information.json
  │       ├── note_interactions.json
  │       ├── personal_information.json
  │       ├── professional_information.json
  │       └── profile_changes.json
  ├── preferences/
  │   ├── media_settings/
  │   │   ├── comments_allowed_from.json
  │   │   ├── consents.json
  │   │   ├── filtered_keywords_for_posts.json
  │   │   ├── notification_preferences.json
  │   │   └── use_cross-app_messaging.json
  │   └── your_topics/
  │       └── recommended_topics.json
  ├── security_and_login_information/
  │   ├── login_and_profile_creation
  │   ├── instagram_signup_details.json
  │   ├── last_known_location.json
  │   ├── login_activity.json
  │   ├── logout_activity.json
  │   └── password_change_activity.json
  └── your_instagram_activity/
      ├── comments/
      │   ├── post_comments_1.json
      │   └── reels_comments.json
      ├── content/
      │   ├── archived_posts.json
      │   ├── posts_1.json
      │   ├── profile_photos.json
      │   └── stories.json
      ├── likes/
      │   ├── liked_comments.json
      │   └── liked_posts.json ✅
      ├── messages/
      │   ├── cross-app-inbox/
      │   │   └── [user_ids]/
      │   │       └── message_1.json
      │   ├── inbox/
      │   │   └── [user_ids]/
      │   │       ├── photos/
      │   │       │   └── [photo_ids]
      │   │       └── message_1.json
      │   ├── message_requests/
      │   │   └── [user_ids]/
      │   │       └── message_1.json
      │   ├── photos/
      │   │   └── [photo_ids]
      │   ├── reported_conversations.json
      │   └── secret_conversations.json
      ├── monetization/
      │   └── eligibility.json
      ├── other_activity/
      │   └── surveys.json
      ├── saved/
      │   ├── saved_collections.json
      │   └── saved_posts.json ✅
      ├── story_sticker_interactions/
      │   ├── emoji_sliders.json
      │   ├── polls.json
      │   ├── questions.json
      │   ├── quizzes.json
      │   └── story_likes.json
      └── subscriptions/
          ├── show_exclusive_story_promo_setting.json
          └── your_muted_story_teaser_creators.json
`;
