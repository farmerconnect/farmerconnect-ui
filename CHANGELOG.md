# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [2.1.5] 2021-12-09

- Fixed: made DatePicker portaling optional

## [2.1.4] 2021-12-08

- SmallInput with width 100%

## [2.1.3] 2021-12-08

- Added: DatePicker portaling

## [2.1.2] 2021-12-08

- Added SmallInput component

## [2.0.2] 2021-12-08

- Filled filter select using the same style as filled input

## [2.0.1] 2021-12-07

- Added: DatePicker now supports multiple calendars
- Added: DatePicker default variant

## [2.0.0] 2021-11-30

- Fix Custom Button styles.
- Add Custom Button color variants.
- Add small Custom Button variants.
- CustomButton variant=cancel is deprecated, please use variant=link instead.
- Icon.Copy is deprecated, as it should have been called Icon.Duplicate. Please use Icon.Duplicate instead.
- Icon.UploadFile is deprecated, please use Icon.Upload instead.
- BREAKING CHANGE: All Icon.IconName icons now use currentColor as their default fill value.

## [1.45.2] 2021-11-30

- Fixed: SmallSelect menu scroll no longer resets when selecting multiple options

## [1.45.1] 2021-11-29

- Fix Range component export

## [1.45.0] 2021-11-24

- Range component added

## [1.44.0] 2021-11-25

- Added footer prop to Select and SmallSelect
- Added year navigation to DatePicker

## [1.43.0] 2021-11-23

- Icons clean up
  - Duplicated icons removed
  - Arrow icon position inside components fixed

## [1.42.5] 2021-11-24

- Fixing Publish in Github action

## [1.42.4] 2021-11-22

- Fixing Build storybook (part 1)

## [1.42.3] 2021-11-22

- Creating Github action

## [1.42.2] 2021-11-12

- Fixed icons FarmerBook2, Global, Network, PinCheck, PinGlobal, PinPlay, PinPlus, PinUp, ProductScan, Project, Report and Team to have the same width and height

## [1.42.1] 2021-11-11

- Fixed LabelSwitch labels size

## [1.42.0] 2021-11-11

- PinGlobal and PinCheck icons added

## [1.41.0] 2021-11-09

- Options icon added

## [1.40.2] 2021-11-09

- Updated Chain svg icon component to use currentColor as default for fill prop

## [1.40.1] 2021-11-09

- Updated ActionInfotip component to allow active prop

## [1.40.0] 2021-11-08

- Added ActionInfotip component

## [1.39.1] 2021-11-05

- Created mixin to standardize scrollbar

## [1.39.0] 2021-11-04

- Added SearchInput component

## [1.38.0] 2021-11-01

- Added favorite icon

## [1.37.3] 2021-10-31

- Added disabled style to Checkbox
- Added disabled style to Radio
- Fixed Tab's current tab highlight

## [1.37.2] 2021-10-27

- Fixed Infotip height

## [1.37.1] 2021-10-27

- Added missing export of Pagination component

## [1.37.0] 2021-10-26

- Added Alert component
- Added 'label' tag option to Typography component
- Fixed LabelSwitch width
- Fixed: Select and SmallSelect checkbox size

## [1.36.3] - 2021-10-21

- LabelSwitch no longer breaks line on larger labels

## [1.36.2] - 2021-10-20

- Icon external link added

## [1.36.1] - 2021-10-13

- Displayed items count text now fits.
- Add hasItemCount prop to toggle item count display.
- Load Red Hat Text in stories.

## [1.36.0] - 2021-10-12

- Add Pagination component
- Add .npmrc to default registry for people who are using company registries

## [1.35.3] - 2021-10-11

- Textarea multiline overflow bug fix

## [1.35.2] - 2021-10-07

- Infotip refactored to match new layout

## [1.35.1] - 2021-10-06

- Added unit property to Input component

## [1.35.0] - 2021-10-06

- IconOnly flag added to CustomButton component
- Copy icon added

## [1.34.0] - 2021-09-29

- Added Typography component
- Added colors to theme

## [1.33.4] - 2021-09-14

- Added slim property to FileUpload component

## [1.33.3] - 2021-09-10

- Added position property to Infotip component arrow

## [1.33.2] - 2021-09-07

- Changed File Upload component border color

## [1.33.1] - 2021-09-02

- Select now close when single and keep open when multi
- Fix filters width on singleSelect

## [1.33.0] - 2021-09-02

- Fix table component

## [1.32.0] - 2021-08-30

- Added FileUpload component
- Added ProgressBar component

## [1.31.0] - 2021-08-21

- Added Select component
- Added helperText to Input
- Added helperText and error text to SmallSelect

## [1.30.0] - 2021-08-20

- Added LabelSwitch component

## [1.29.1] - 2021-08-19

- Added resolveItemRender prop in FilterSelect

## [1.29.0] - 2021-08-19

- Added global icon

## [1.28.1] - 2021-08-19

- Added year to DatePicker month label

## [1.28.0] - 2021-08-16

- Orderer styles
- Toggle styles

## [1.27.1] - 2021-08-13

- Fixed DatePicker styling

## [1.27.0] - 2021-08-11

- Added DatePicker

## [1.26.0] - 2021-08-09

- Added Filter icon
- Changed smallSelect behaviour when tags list are bigger than the size

## [1.25.1] - 2021-08-05

- Added rounded corners to the first and last column of the table component row

## [1.25.0] - 2021-08-03

- Added Infotip component

## [1.24.2] - 2021-07-28

- Changed tooltip to accept content from data-tip, included delay prop and export rebuild.

## [1.24.1] - 2021-07-28

- Removed TextInput export

## [1.24.0] - 2021-07-26

- Added Orderer component
- Added Information icon
- Changed tooltip to use tooltip-react
- Removed TextInput component

## [1.23.0] - 2021-07-21

- Added TagSelect component
- Added children prop to Input component
- Added Share icon
- Added Alert icon
- Added MagnifyingGlass icon
- Added Chain icon
- Added InlineLoader component
- Fixed Dropdown positions
- Fixed Modal props' spreading
- Fixed Modal overlay opacity

## [1.22.1] - 2021-07-22

- Added missing export of Breadcrumb component

## [1.22.0] - 2021-07-22

- Renamed existing Breadcrumbs to WizardSteps
- Fixed Public Profile Icon
- Added new Breadcrumbs component

## [1.21.3] - 2021-07-19

- Fix ProductScan icon (again)

## [1.21.2] - 2021-07-19

- Fix ProductScan icon

## [1.21.1] - 2021-07-19

- Added open/close event in Card component
- New font size for default Card component title

## [1.21.0] - 2021-07-19

- Added delete icon

## [1.20.0] - 2021-07-15

- Added Accordion component
- Fixed Card types

## [1.19.0] - 2021-07-14

- Added DropdownSelect subitems
- Fixed EditableLabel behavior

## [1.18.0] - 2021-07-12

- Added Card component

## [1.17.9] - 2021-07-13

- Fixed isLoading prop on Table component

## [1.17.8] - 2021-07-12

- Added isLoading prop to Table component

## [1.17.7] - 2021-07-08

- Added validation and error feedback to EditableLabel

## [1.17.6] - 2021-07-07

- Created optional validate function on TextInput

## [1.17.5] - 2021-07-06

- Added input trim on DropdownSelect

## [1.17.4] - 2021-07-05

- Fixed selectedItem prop in FilterSelect

## [1.17.3] - 2021-07-02

- Added prop disabled in FilterSelect
- Added prop selectedItem in FilterSelect
- Show hover on selected option in FilterSelect
- Added prop disabled in Input

## [1.17.2] - 2021-07-02

- DropdownSelect on search hiding the dnd action

## [1.17.1] - 2021-06-30

- Fixed DropdownSelect styling

## [1.17.0] - 2021-06-30

- Added drag and drop on DropdownSelect

## [1.16.0] - 2021-06-28

- Added TextArea component

## [1.15.0] - 2021-06-28

- Add custom theme
- Edit indtroduction page

## [1.14.0] - 2021-06-25

- Added EditableLabel component

## [1.13.0] - 2021-06-24

- Added Input component
- Added Toggle component

## [1.12.5] - 2021-06-23

- Download icon fixed fill prop

## [1.12.4] - 2021-06-22

- Removed side padding of custom buttons when text or link variant selected
- Added download icon
- Fixed border-radius from buttons on navigation bar
- Added hoverable prop on Table component

## [1.12.3] - 2021-06-21

- Public Profile icon reduced to 24px
- Margin increased to 6px more in tooltip component

## [1.12.2] - 2021-06-18

- Tag component line-height reduced to 14px
- Slim table vertical padding reduced to 8px

## [1.12.1] - 2021-06-18

- Table component changes
  - Default font-weight updated to 500
  - Slim prop added
  - Default theme added

## [1.11.2] - 2021-06-14

- Table component nested array children fix

## [1.11.1] - 2021-06-14

- Standardize prettier config

## [1.11.0] - 2021-06-10

- Icons
  - Edit icon added
  - ProductScan icon updated
- Table component
  - Children logic fixed
  - Body cells font size updated

## [1.10.0] - 2021-06-08

- Dropdown Select component added

## [1.9.0] - 2021-06-07

- Tag component added
- Enzyme serializer added

## [1.8.0] - 2021-06-07

- Dropdown component added

## [1.7.0] - 2021-06-04

- Tooltip component added

## [1.6.1] - 2021-06-02

- Table component documentation improved
- Table component exported
- SVG warnings fixed

## [1.6.0] - 2021-06-02

- Table component added

## [1.5.0] - 2021-06-01

- Add SmallSelect
- Changed SingleSelect to add dropdown filters

## [1.4.2] - 2021-05-27

- Standardize eslint

## [1.4.1] - 2021-05-26

- Fix package name

## [1.4.0] - 2021-05-26

- Add tab

## [1.3.1] - 2021-05-26

- Fix audit issues
- Add audit checks pre-commit and to pipeline

## [1.3.0] - 2021-05-24

- Add SingleSelect and MultiSelect components
- Removed deprecated Select and ComboMulti

## [1.2.0] - 2021-05-21

- Add eslint with CRA rules
- Add prettier
- Format code following new rules

## [1.1.4] - 2021-05-21

- Add LICENSE

## [1.1.3] - 2021-05-20

- Change icons names and dummy data on selects

## [1.1.2] - 2021-05-19

- Fix build pipeline

## [1.1.1] - 2021-05-19

- Merge with the latest updates on old repository

## [1.1.0] - 2021-05-19

- Add storybook-deployer and deploy step to pipeline so that the latest version is always deployed to github pages after build succeeds

## [1.0.0] - 2021-05-17

- Publish on Github

## [0.1.43] - 2021-05-18

- Removed dangerouslySetInnerHTML from Loader

## [0.1.42] - 2021-05-12

- Added Single Select
- Changed multicombobox logic to use useReducer

## [0.1.41] - 2021-05-12

- Added Modal component

## [0.1.40] - 2021-05-11

- Added Radio component
- Removed Icon tooltips

## [0.1.39] - 2021-05-09

- Fixed Icon components

## [0.1.38] - 2021-05-03

- Added CommunityBuilder old icon
- Fixed SVG Component typings

## [0.1.37] - 2021-05-03

- Added _Icon_ components

## [0.1.36] - 2021-04-28

- Added _Row_ and _Col_ grid components
- Added _Container_ responsive component

## [0.1.35] - 2021-03-14

- Adjust multiCombobox to accept more than one item
