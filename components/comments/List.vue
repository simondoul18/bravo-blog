<template>
    <ul class="comment-list" v-if="store.post_detail.comments">
        <li class="comment" v-for="comment in store.post_detail.comments" :key="comment.id">
            <div class="vcard" v-if="comment.user">
                <img v-if="comment.user.picture" :src="comment.user.picture" alt="Image placeholder" />
                <img v-else src="~/assets/images/person_1.jpg" alt="Image placeholder" />
            </div>
            <div class="vcard" v-else>
                <img src="~/assets/images/person_1.jpg" alt="Image placeholder" />
            </div>
            <div class="comment-body">
                <h3 v-if="comment.user">{{ comment.user.name }}</h3>
                <h3 v-else>{{ comment.name }}</h3>
                <div class="meta">{{ moment.utc(comment.created_at).format('MMMM D, YYYY hh:mm a') }}</div>
                <p>
                    {{comment.comment}}
                </p>
                <!-- <p><a href="#" class="reply rounded">Reply</a></p> -->
            </div>
        </li>
        <!-- <li class="comment">
            <div class="vcard">
                <img src="images/person_1.jpg" alt="Image placeholder" />
            </div>
            <div class="comment-body">
                <h3>Jean Doe</h3>
                <div class="meta">January 9, 2018 at 2:21pm</div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit
                    necessitatibus, nihil?
                </p>
                <p><a href="#" class="reply rounded">Reply</a></p>
            </div>
            <ul class="children">
                <li class="comment">
                    <div class="vcard">
                        <img src="images/person_1.jpg" alt="Image placeholder" />
                    </div>
                    <div class="comment-body">
                        <h3>Jean Doe</h3>
                        <div class="meta">January 9, 2018 at 2:21pm</div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum
                            impedit necessitatibus, nihil?
                        </p>
                        <p><a href="#" class="reply rounded">Reply</a></p>
                    </div>
                    <ul class="children">
                        <li class="comment">
                            <div class="vcard">
                                <img src="images/person_1.jpg" alt="Image placeholder" />
                            </div>
                            <div class="comment-body">
                                <h3>Jean Doe</h3>
                                <div class="meta">January 9, 2018 at 2:21pm</div>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam
                                    voluptas earum impedit necessitatibus, nihil?
                                </p>
                                <p><a href="#" class="reply rounded">Reply</a></p>
                            </div>
                            <ul class="children">
                                <li class="comment">
                                    <div class="vcard">
                                        <img src="images/person_1.jpg" alt="Image placeholder" />
                                    </div>
                                    <div class="comment-body">
                                        <h3>Jean Doe</h3>
                                        <div class="meta">January 9, 2018 at 2:21pm</div>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam
                                            voluptas earum impedit necessitatibus, nihil?
                                        </p>
                                        <p><a href="#" class="reply rounded">Reply</a></p>
                                    </div>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </li> -->
    </ul>
</template>
<script setup>
import { usePostsStore } from '@/stores/posts'
import moment from "moment";
const store = usePostsStore()
</script>