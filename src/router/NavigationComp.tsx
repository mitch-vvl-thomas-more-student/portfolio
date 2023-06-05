import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Introduction } from '../components/Introduction'
import { Algemeen } from '../components/Algemeen'
import { NotFound } from '../components/NotFound'
import { PersoonlijkeRealisaties } from '../components/PersoonlijkeRealisaties'
import { MicrosoftCertified } from '../components/MicrosoftCertified'
import { Opleiding } from '../components/Opleiding'
import { PersoonlijkeTroeven } from '../components/PersoonlijkeTroeven'
import { Php } from '../components/Php'
import { ProfessionalSocials } from '../components/ProfessionalSocials'
import { SchoolProjecten } from '../components/Shoolprojecten'
import { Technologieen } from '../components/Technologieen'
import { Webwinkels } from '../components/Webwinkels'

export const NavigationComp = () => {
  return (
    <Routes>
      <Route path="/" element={<Introduction />} />
      <Route path="/algemeen" element={<Algemeen />} />
      <Route path="/persoonlijke-realisaties" element={<PersoonlijkeRealisaties />} />
      <Route path="/webwinkels" element={<Webwinkels />} />
      <Route path="/php" element={<Php />} />
      <Route path="/persoonlijke-troeven" element={<PersoonlijkeTroeven />} />
      <Route path="/opleiding" element={<Opleiding />} />
      <Route path="/schoolprojecten" element={<SchoolProjecten />} />
      <Route path="/microsoft-certified" element={<MicrosoftCertified />} />
      <Route path="/technologieen" element={<Technologieen />} />
      <Route path="/professional-socials" element={<ProfessionalSocials />} />

      {/* default view for /me path */}
      {/* <Route index element={<Design />} />
        <Route path="design" element={<Design />} />
        <Route path="react" element={<ReactFrameWork />} />
        <Route path="csharp" element={<CSharp />} />
        <Route path="microsoft365" element={<Microsoft365 />} />
      </Route> */}

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}