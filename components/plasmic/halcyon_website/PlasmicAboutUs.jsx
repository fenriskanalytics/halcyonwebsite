// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 4ek7yevYSmZU9MaEHzjjyJ
// Component: wamzBqh56Hhg
import * as React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import HalcyonNavBar from "../../HalcyonNavBar"; // plasmic-import: UDe2_-rIrkzi/component
import ComponentAboutUs from "../../ComponentAboutUs"; // plasmic-import: eI7BZkRwT6IZ/component
import SectionMeetTheTeam from "../../SectionMeetTheTeam"; // plasmic-import: OPun2yHK_93c/component
import HalcyonFooter from "../../HalcyonFooter"; // plasmic-import: WgtcOX7lLlZ3/component
import HalcyonFooterBottom from "../../HalcyonFooterBottom"; // plasmic-import: DyM3o4afMIzM/component
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 4ek7yevYSmZU9MaEHzjjyJ/projectcss
import sty from "./PlasmicAboutUs.module.css"; // plasmic-import: wamzBqh56Hhg/css

createPlasmicElementProxy;

export const PlasmicAboutUs__VariantProps = new Array();

export const PlasmicAboutUs__ArgProps = new Array();

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicAboutUs__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );
  const $props = {
    ...args,
    ...variants
  };
  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
        <title key="title">{PlasmicAboutUs.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicAboutUs.pageMetadata.title}
        />

        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicAboutUs.pageMetadata.title}
        />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            plasmic_antd_5_hostless_css.plasmic_tokens,
            sty.root
          )}
        >
          <HalcyonNavBar
            data-plasmic-name={"halcyonNavBar"}
            data-plasmic-override={overrides.halcyonNavBar}
            className={classNames("__wab_instance", sty.halcyonNavBar)}
          />

          <ComponentAboutUs
            data-plasmic-name={"componentAboutUs"}
            data-plasmic-override={overrides.componentAboutUs}
            className={classNames("__wab_instance", sty.componentAboutUs)}
          />

          <SectionMeetTheTeam
            data-plasmic-name={"sectionMeetTheTeam"}
            data-plasmic-override={overrides.sectionMeetTheTeam}
            className={classNames("__wab_instance", sty.sectionMeetTheTeam)}
          />

          <HalcyonFooter
            data-plasmic-name={"halcyonFooter"}
            data-plasmic-override={overrides.halcyonFooter}
            className={classNames("__wab_instance", sty.halcyonFooter)}
          />

          <HalcyonFooterBottom
            data-plasmic-name={"halcyonFooterBottom"}
            data-plasmic-override={overrides.halcyonFooterBottom}
            className={classNames("__wab_instance", sty.halcyonFooterBottom)}
          />
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "halcyonNavBar",
    "componentAboutUs",
    "sectionMeetTheTeam",
    "halcyonFooter",
    "halcyonFooterBottom"
  ],

  halcyonNavBar: ["halcyonNavBar"],
  componentAboutUs: ["componentAboutUs"],
  sectionMeetTheTeam: ["sectionMeetTheTeam"],
  halcyonFooter: ["halcyonFooter"],
  halcyonFooterBottom: ["halcyonFooterBottom"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicAboutUs__ArgProps,
          internalVariantPropNames: PlasmicAboutUs__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicAboutUs__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicAboutUs";
  } else {
    func.displayName = `PlasmicAboutUs.${nodeName}`;
  }
  return func;
}

export const PlasmicAboutUs = Object.assign(
  // Top-level PlasmicAboutUs renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    halcyonNavBar: makeNodeComponent("halcyonNavBar"),
    componentAboutUs: makeNodeComponent("componentAboutUs"),
    sectionMeetTheTeam: makeNodeComponent("sectionMeetTheTeam"),
    halcyonFooter: makeNodeComponent("halcyonFooter"),
    halcyonFooterBottom: makeNodeComponent("halcyonFooterBottom"),
    // Metadata about props expected for PlasmicAboutUs
    internalVariantProps: PlasmicAboutUs__VariantProps,
    internalArgProps: PlasmicAboutUs__ArgProps,
    // Page metadata
    pageMetadata: {
      title: "About Us",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicAboutUs;
/* prettier-ignore-end */
