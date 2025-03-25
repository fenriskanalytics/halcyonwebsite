// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 4ek7yevYSmZU9MaEHzjjyJ
// Component: DtUlfJNPg8Gz
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
import { Embed } from "@plasmicpkgs/plasmic-basic-components";
import { Iframe } from "@plasmicpkgs/plasmic-basic-components";
import HalcyonFooter from "../../HalcyonFooter"; // plasmic-import: WgtcOX7lLlZ3/component
import HalcyonFooterBottom from "../../HalcyonFooterBottom"; // plasmic-import: DyM3o4afMIzM/component
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 4ek7yevYSmZU9MaEHzjjyJ/projectcss
import sty from "./PlasmicMemberships.module.css"; // plasmic-import: DtUlfJNPg8Gz/css

createPlasmicElementProxy;

export const PlasmicMemberships__VariantProps = new Array();

export const PlasmicMemberships__ArgProps = new Array();

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicMemberships__RenderFunc(props) {
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
        <title key="title">{PlasmicMemberships.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicMemberships.pageMetadata.title}
        />

        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicMemberships.pageMetadata.title}
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

          <Embed
            data-plasmic-name={"membershipsHtmlEmbed"}
            data-plasmic-override={overrides.membershipsHtmlEmbed}
            className={classNames("__wab_instance", sty.membershipsHtmlEmbed)}
            code={'<div data-mariana-integrations="/buy"></div>'}
          />

          <section
            data-plasmic-name={"section"}
            data-plasmic-override={overrides.section}
            className={classNames(projectcss.all, sty.section)}
          >
            <Iframe
              data-plasmic-name={"membershipsIframe"}
              data-plasmic-override={overrides.membershipsIframe}
              className={classNames("__wab_instance", sty.membershipsIframe)}
              preview={true}
              src={"https://halcyonstudio.marianaiframes.com/iframe/buy/48717"}
            />
          </section>
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
    "membershipsHtmlEmbed",
    "section",
    "membershipsIframe",
    "halcyonFooter",
    "halcyonFooterBottom"
  ],

  halcyonNavBar: ["halcyonNavBar"],
  membershipsHtmlEmbed: ["membershipsHtmlEmbed"],
  section: ["section", "membershipsIframe"],
  membershipsIframe: ["membershipsIframe"],
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
          internalArgPropNames: PlasmicMemberships__ArgProps,
          internalVariantPropNames: PlasmicMemberships__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicMemberships__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicMemberships";
  } else {
    func.displayName = `PlasmicMemberships.${nodeName}`;
  }
  return func;
}

export const PlasmicMemberships = Object.assign(
  // Top-level PlasmicMemberships renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    halcyonNavBar: makeNodeComponent("halcyonNavBar"),
    membershipsHtmlEmbed: makeNodeComponent("membershipsHtmlEmbed"),
    section: makeNodeComponent("section"),
    membershipsIframe: makeNodeComponent("membershipsIframe"),
    halcyonFooter: makeNodeComponent("halcyonFooter"),
    halcyonFooterBottom: makeNodeComponent("halcyonFooterBottom"),
    // Metadata about props expected for PlasmicMemberships
    internalVariantProps: PlasmicMemberships__VariantProps,
    internalArgProps: PlasmicMemberships__ArgProps,
    // Page metadata
    pageMetadata: {
      title: "Memberships",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicMemberships;
/* prettier-ignore-end */
