<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep the practice website as public content routes with shared navigation in the root layout; each section is independently shareable.
- Centralize practice details and services in a browser-safe content module so all pages use the same verified facts.
- Appointment calls to action initiate a telephone call; do not imply an online booking has been confirmed without a scheduling service.
- Render the practice location through a shared Google Maps Embed component using only the connector's public browser key; no server-side geographic lookup is needed for a fixed address.
- Coordinate scroll reveals in a route-aware observer with visible SSR defaults and reduced-motion handling; never intercept native wheel or touch scrolling.
- Render the reference-based navigation logo as live text and an inline SVG symbol so it stays sharp at compact sizes.
