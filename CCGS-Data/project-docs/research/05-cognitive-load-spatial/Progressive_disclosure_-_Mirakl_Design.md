# Progressive disclosure - Mirakl Design

Progressive disclosure | Mirakl Design 

[Mirakl Design](https://design.mirakl.com/)   `⌘ Ctrl` `k`

[Mirakl Design](https://design.mirakl.com/)   `⌘ Ctrl` `k`

Getting started

[Welcome to Roma](https://design.mirakl.com/)

Design

[Components](https://design.mirakl.com/design/components)

[Patterns](https://design.mirakl.com/design/patterns)

[Advanced selection](https://design.mirakl.com/design/patterns/advanced-selection)

[Configure options](https://design.mirakl.com/design/patterns/configure-options)

[Deletion](https://design.mirakl.com/design/patterns/deletion)

[Displaying data](https://design.mirakl.com/design/patterns/displaying-data)

[Displaying history](https://design.mirakl.com/design/patterns/displaying-history)

[Errors](https://design.mirakl.com/design/patterns/errors)

[Forms](https://design.mirakl.com/design/patterns/forms)

[Loading](https://design.mirakl.com/design/patterns/loading)

[Progressive disclosure](https://design.mirakl.com/design/patterns/progressive-disclosure)

content

[Writing for Mirakl](https://design.mirakl.com/content/writing-for-mirakl)

[Vocabulary](https://design.mirakl.com/content/vocabulary)  

[Powered by GitBook](https://www.gitbook.com/?utm_source=content&utm_medium=trademark&utm_campaign=MoZPkWOmnKvoMWGW4aeM&utm_content=site_rPFX9)  

 On this page

[Progressive Disclosure in Forms](https://design.mirakl.com/design/patterns/progressive-disclosure#progressive-disclosure-in-forms)

[Structuring Information in panels](https://design.mirakl.com/design/patterns/progressive-disclosure#structuring-information-in-panels)

[Dependency Dynamics](https://design.mirakl.com/design/patterns/progressive-disclosure#dependency-dynamics)

[Stepper forms](https://design.mirakl.com/design/patterns/progressive-disclosure#stepper-forms)

[Applying Progressive Disclosure Beyond Forms](https://design.mirakl.com/design/patterns/progressive-disclosure#applying-progressive-disclosure-beyond-forms)

[Expendable Panels](https://design.mirakl.com/design/patterns/progressive-disclosure#expendable-panels)

[Side Drawer overlay](https://design.mirakl.com/design/patterns/progressive-disclosure#side-drawer-overlay)

[Limited Display with "See More" Trigger](https://design.mirakl.com/design/patterns/progressive-disclosure#limited-display-with-see-more-trigger)

Was this helpful?  

Copy  

On this page 

[Design](https://design.mirakl.com/design)

[Patterns](https://design.mirakl.com/design/patterns)

# Progressive disclosure

Reveal gradually information to minimize cognitive load for a more intuitive design experience.

## Progressive Disclosure in Forms

Forms vary from simple layouts with few inputs to complex structures with many components. **Progressive disclosure helps manage this complexity without overwhelming the user.** This approach involves a strategic use of design elements to enhance efficiency and understanding.

### **Structuring Information in panels**

Start by organizing related fields into [panels](https://design.mirakl.com/design/components/structure/panel) or using panel separators.

This groups related information together, making it easier to understand and follow. Panels not only help in organizing the form but also make it visually appealing and guide users through the information logically.

Before adding a new panel, consider whether new fields can be accommodated within existing panels. 

Example of the use of panels in a form that guides users

### **Dependency Dynamics**

**Enabling and Disabling Fields**

Some forms have fields that depend on each other; the selection in one field can enable or disable another. Clearly show these dependencies using tooltips that appear when users hover over a disabled field. This helps users understand why some options are not available. 

Example of the use of disable fields in a form that guides users

**Enable vs. hide**

**If a control is not applicable until a choice is made**, hide it at first and reveal it when the triggering choice is selected.

Rationale: avoids noise when the user cannot act yet.

**If the user needs awareness** that a control exists but is currently unavailable, show it disabled.

Rationale: sets expectations and communicates capability, even if it's not yet actionable.

**If the dependent control is critical to task completion**, prefer revealing it (enabled) immediately after the trigger is satisfied, keeping focus in context. 

**Accessibility note**: hidden content must not be reachable by keyboard or screen readers; disabled controls are perceivable but not focusable in many UAs, so provide an accessible explanation (see next section).

Using SubContentWrapper for Nested Dependencies

Progressive disclosure can reveal content in two fundamentally different ways: **peer-level conditional visibility** or **hierarchical nested content**. Understanding this distinction is critical to choosing the right pattern.

**Peer or Child?** 

Before revealing content, ask: **"Is the revealed content a peer requirement OR a sub-element of the trigger?"**

Scenario

Relationship

Pattern

Visual treatment

"Enable notifications" → Email field

**Peer** (separate requirement)

Standard progressive disclosure

No wrapper, field appears at same level

"Custom shipping" → Carrier options

**Child** (sub-configuration)

SubContentWrapper

Indented with vertical bar, nested visually

**Standard Progressive Disclosure (NO SubContentWrapper)**

**Use when:** Revealed content is a **peer-level requirement** that depends on a choice but is not a sub-element of that choice. **Visual behavior:** Content appears at the same indentation level, no visual nesting. **Example scenarios:**

☑ Enable email notifications → [Email address field appears]

☑ Apply discount code → [Code input field appears]

☑ Subscribe to updates → [Frequency selector appears] 

**Why no wrapper?** The email field, discount code, and frequency selector are **separate pieces of information** that happen to be required based on a choice. They are not configurations of the checkbox—they are peer-level form fields.

SubContentWrapper (WITH visual nesting)

**Use when:** Revealed content is a **child element or sub-configuration** that belongs structurally to the trigger. **Visual behavior:** Content appears indented with a vertical bar, creating clear parent → child hierarchy. **Example scenarios:**

◉ Custom shipping → **[SubContentWrapper]** Carrier selection, rates, delivery options

◉ Enable advanced pricing → **[SubContentWrapper]** Tier configuration, bulk discounts, rules

◉ Payment method: Credit card → **[SubContentWrapper]** Card details form, billing address 

**Why use wrapper?** The revealed content is not just "required if you check this"—it's **part of** the thing you're configuring. Carrier options are sub-options of custom shipping. Card details are the configuration of the credit card payment method.

### Stepper forms

For long or complex forms, consider using steppers. Steppers break the form into smaller, manageable steps, helping to reduce cognitive load. They are particularly useful when user choices affect subsequent options. Steppers ensure that the user remains focused on one task at a time, adapting fields based on previous selections. 

Example of the use of stepper form that guides users

**Considerations for Stepper Implementation**

When considering a stepper, weigh its pros and cons :

Pros of Using Stepper Forms

**Guides Users Through Complex Forms**: Steppers are excellent for navigating users step-by-step through complex object creation, reducing cognitive load and ensuring focus.

**Adaptive Fields Based on User Choices**: They can dynamically adapt fields and options based on user selections in previous steps.

Cons of Using Stepper Forms

**Not Ideal for Viewing and Editing**: Once an object is created using a stepper, viewing or editing it through the same stepper can be cumbersome. It's more effective to use a single-page form for these actions.

**Requires Design of Multiple Interfaces**: Implementing steppers necessitates designing both the multi-step creation process and a complementary single-page interface for subsequent viewing and editing. 

A single page of an object created through a stepper, allowing users to have a full picture of the object without having to go through the whole stepper

## Applying Progressive Disclosure Beyond Forms

We can apply Progressive Disclosure principles when activating options using an Activable Panel. [Learn more about Activating Options](https://design.mirakl.com/design/patterns/configure-options).

### Expendable Panels

Use panels that expand when clicked, revealing more information. This method keeps pages clear and simple, revealing more content only when needed. 

Exemple of how exepandable panels allow to reduce cognitive load

### Side Drawer overlay

A side drawer can show additional details without overcrowding the main page. It's useful for examining supplementary information without leaving the current page. 

Use of Side Drawer to diplay more information about an item

### **Limited Display with "See More" Trigger**

Show only part of the content at first, with a 'See More' option for users to view the rest. This keeps the display clean while allowing access to more information as needed. 

**Two Ways to Use 'See More':**

**Expandable Wrapper**: Clicking the button expands or collapses content within the same section. The hidden content appears directly in the panel where the button is placed.

**"See More" Button**: The button opens more content in a different component, like a modal or a new page.

Last updated 5 months ago

Was this helpful?

This site uses cookies to deliver its service and to analyze traffic. By browsing this site, you accept the [privacy policy](https://policies.gitbook.com/privacy/cookies). 

Accept Reject