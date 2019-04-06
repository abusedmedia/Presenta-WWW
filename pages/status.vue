<template>
    <div>
        <header>
            <h1>The status <br />of PRESENTA</h1>
        </header>
        
        <section>
            <h3>This document outlines the current status <strong>(AKA known issues)</strong> of the tool in order to consider them during your first experience.</h3>
            <p>It's a living document following the same status of the tool, therefore, frequent updates are the norm.</p>

            <h2>A note about compatibility</h2>
            <p><strong>PRESENTA</strong> is currently developed on Google Chrome, meaning it's the most compatible browser to use with. Said that, the tool works well on recent browsers but some quirks may happen. In a later stage it will work the same on all the evergreen browsers.</p>
            <p>On mobile and touch devices, in general, the tool might work fine but it's not optimized yet for them. In a later stage, it will work even on smartphone as well.</p>

            <!--
            <h2>A brief introduction</h2>
            <p><strong>PRESENTA</strong> is a tool to make presentations. It does differ from very well-known tools, such as Powerpoint/Keynote,  </p>
            <p><strong>PRESENTA</strong> has three main views:</p>

            <Presentation />
            <Slides />
            <Editor />
            -->

            <h2>Slides handling</h2>
            <div class="col two">
                <div><img src="~/assets/selection.gif" /></div>
                <div>
                    <p>It's the place where you can arrange slides.</p>
                    <p>Currently, you can handle all the typical actions in this context (move, add, delete, duplicate) but it lacks some common UI/UX pattern to compete with the actual user expectation, such as:
                        <ul>
                            <li>Multiple selection by drawing a rectangle over the slides</li>
                            <li>Performing AND/OR selection with SHIFT/ALT modifier keys</li>
                            <li>Copy/Paste using keyboard keys</li>
                            <li>Drag&Drop one or more slides to arrange them</li>
                        </ul>
                    </p>
                </div>
            </div>


            <h2>Dropping files</h2>
            <div class="col two">
                <div><img src="~/assets/dropping.gif" /></div>
                <div>
                    <p>The ability to drop files (usually images) into a specific slide or between slides (let's say, to create a new slide with an image), is a very interesting and efficient UX pattern.</p>
                    <p>Currently, it's partially implemented and not ready for users.
                        The good news is that it's on the way.
                    </p>
                </div>
            </div>



            <h2>The Styler component</h2>
            <div class="col two">
                <div><img src="~/assets/styler.gif" /></div>
                <div>
                    <p>This component is in an early stage, pure functional without any real UX thoughts so far. </p>
                    <p>It is also in continuous evolution since I'm exploring different creative possibilities with it.</p>
                </div>
            </div>


            <h2>The Text Editor</h2>
            <div class="col two">
                <div><img src="~/assets/textedit.gif" /></div>
                <div><p>The text editor is not 100% complete but it gives a picture of the capability, though.</p></div>
            </div>


            <h2>Markdown</h2>
            <p><a href="https://daringfireball.net/projects/markdown/">Markdown</a> is a very fast way to write structured text that can be converted into other things. <br /><strong>PRESENTA</strong> supports (optionally) markdown in two specific areas:</p>
            <div class="col two">
                <div><img src="~/assets/markdown.gif" /></div>
                <div>
                    <p>You can import a markdown file to produce a presentation</p>
                </div>
            </div>
            <div class="col two">
                <div><img src="~/assets/marktext.gif" /></div>
                <div>
                    <p>You can type some markdown in the text editor to avoid using the formatting tool</p>
                </div>
            </div>

            <h2>The Profile view</h2>
            <div class="col two">
                <div><img src="~/assets/profile.gif" /></div>
                <div><p>Just a basic view without any care from UX perspective, so far.</p></div>
            </div>
            

            <h2>Ready to PRESENTA?</h2>
            <p>If you are a beta-tester, you can now follow the given instructions.</p>
            <p>Otherwise, ask for a beta-testing invitation <a href="/">here!</a></p>

        </section>
    </div>
</template>


<script src="./status.js"></script>
