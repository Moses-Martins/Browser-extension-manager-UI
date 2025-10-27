import ConsolePlus from '../assets/images/logo-console-plus.svg';
import Devlens from '../assets/images/logo-devlens.svg';
import DOMSnapshot from '../assets/images/logo-dom-snapshot.svg';
import GridGuides from '../assets/images/logo-grid-guides.svg';
import JSONWizard from '../assets/images/logo-json-wizard.svg';
import LinkChecker from '../assets/images/logo-link-checker.svg';
import MarkupNotes from '../assets/images/logo-markup-notes.svg';
import PalettePicker from '../assets/images/logo-palette-picker.svg';
import SpeedBoost from '../assets/images/logo-speed-boost.svg';
import StyleSpy from '../assets/images/logo-style-spy.svg';
import TabMaster from '../assets/images/logo-tab-master-pro.svg';
import ViewportBuddy from '../assets/images/logo-viewport-buddy.svg';
import Card from "../components/card/Card";
import type { Filter } from "../components/filterbutton/FilterButtons";
import Icon from '../components/icon/Icon';


type CardListProps = {
  activeFilter: Filter; // or boolean | number | something else depending on your app
};

function CardList({activeFilter}: CardListProps) {
    

    return (
        <section className="w-[95%] max-w-7xl mt-4 mb-9 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-sm:gap-4">            
            <Card name="DevLens" description="Quickly inspect page layouts and visualize element boundaries." icon={<Icon src={Devlens} alt={Devlens} />} activeFilter={activeFilter} />
            <Card name="StyleSpy" description="Instantly analyze and copy CSS from any webpage element." icon={<Icon src={StyleSpy} alt="StyleSpy" />} activeFilter={activeFilter} />
            <Card name="SpeedBoost" description="Optimizes browser resource usage to accelerate page loading." icon={<Icon src={SpeedBoost} alt="SpeedBoost" />} activeFilter={activeFilter} />
            <Card name="JSONWizard" description="Formats, validates, and prettifies JSON responses in-browser." icon={<Icon src={JSONWizard} alt="JSONWizard" />} activeFilter={activeFilter} />
            <Card name="TabMaster" description="Pro Organizes browser tabs into groups and sessions." icon={<Icon src={TabMaster} alt="TabMaster" />} activeFilter={activeFilter} />
            <Card name="ViewportBuddy" description="Simulates various screen resolutions directly within the browser." icon={<Icon src={ViewportBuddy} alt="ViewportBuddy" />} activeFilter={activeFilter} />
            <Card name="Markup Notes" description="Enables annotation and notes directly onto webpages for collaborative debugging." icon={<Icon src={MarkupNotes} alt="MarkupNotes" />} activeFilter={activeFilter} />
            <Card name="GridGuides" description="Overlay customizable grids and alignment guides on any webpage." icon={<Icon src={GridGuides} alt="GridGuides" />} activeFilter={activeFilter} />
            <Card name="Palette Picker" description=" Instantly extracts color palettes from any webpage." icon={<Icon src={PalettePicker} alt="PalettePicker" />} activeFilter={activeFilter} />
            <Card name="LinkChecker" description="Scans and highlights broken links on any page." icon={<Icon src={LinkChecker} alt="LinkChecker" />} activeFilter={activeFilter} />
            <Card name="DOM Snapshot" description="Capture and export DOM structures quickly." icon={<Icon src={DOMSnapshot} alt="DOMSnapshot" />} activeFilter={activeFilter} />
            <Card name="ConsolePlus" description="Enhanced developer console with advanced filtering and logging." icon={<Icon src={ConsolePlus} alt="ConsolePlus" />} activeFilter={activeFilter} />
        </section>
    )
}

export default CardList

