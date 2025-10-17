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


type CardListProps = {
  activeFilter: Filter; // or boolean | number | something else depending on your app
};

function CardList({activeFilter}: CardListProps) {
    

    return (
        <section className="w-max mt-[4vh] mb-[6vh] pl-[5px] mx-[auto] grid grid-cols-3 grid-rows-3 gap-[12px]">
            <Card name="DevLens" description="Quickly inspect page layouts and visualize element boundaries." icon={<img src={Devlens} alt={Devlens} />} activeFilter={activeFilter} />
            <Card name="StyleSpy" description="Instantly analyze and copy CSS from any webpage element." icon={<img src={StyleSpy} alt="StyleSpy" />} activeFilter={activeFilter} />
            <Card name="SpeedBoost" description="Optimizes browser resource usage to accelerate page loading." icon={<img src={SpeedBoost} alt="SpeedBoost" />} activeFilter={activeFilter} />
            <Card name="JSONWizard" description="Formats, validates, and prettifies JSON responses in-browser." icon={<img src={JSONWizard} alt="JSONWizard" />} activeFilter={activeFilter} />
            <Card name="TabMaster" description="Pro Organizes browser tabs into groups and sessions." icon={<img src={TabMaster} alt="TabMaster" />} activeFilter={activeFilter} />
            <Card name="ViewportBuddy" description="Simulates various screen resolutions directly within the browser." icon={<img src={ViewportBuddy} alt="ViewportBuddy" />} activeFilter={activeFilter} />
            <Card name="Markup Notes" description="Enables annotation and notes directly onto webpages for collaborative debugging." icon={<img src={MarkupNotes} alt="MarkupNotes" />} activeFilter={activeFilter} />
            <Card name="GridGuides" description="Quickly inspect page layouts and visualize element boundaries." icon={<img src={GridGuides} alt="GridGuides" />} activeFilter={activeFilter} />
            <Card name="Palette Picker" description=" Instantly extracts color palettes from any webpage." icon={<img src={PalettePicker} alt="PalettePicker" />} activeFilter={activeFilter} />
            <Card name="LinkChecker" description="Scans and highlights broken links on any page." icon={<img src={LinkChecker} alt="LinkChecker" />} activeFilter={activeFilter} />
            <Card name="DOM Snapshot" description="Capture and export DOM structures quickly." icon={<img src={DOMSnapshot} alt="DOMSnapshot" />} activeFilter={activeFilter} />
            <Card name="ConsolePlus" description="Enhanced developer console with advanced filtering and logging." icon={<img src={ConsolePlus} alt="ConsolePlus" />} activeFilter={activeFilter} />
        </section>
    )
}

export default CardList

