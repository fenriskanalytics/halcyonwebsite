// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 4ek7yevYSmZU9MaEHzjjyJ
// Component: uLRgmd5xI0ma
import * as React from "react";
import { useRouter } from "next/router";
import {
  Stack as Stack__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  hasVariant
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import { useScreenVariants as useScreenVariantsqAyk5ZgNfB } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: q_ayk5ZGNfB_/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 4ek7yevYSmZU9MaEHzjjyJ/projectcss
import sty from "./PlasmicContainerPrivacyPolicy.module.css"; // plasmic-import: uLRgmd5xI0ma/css

createPlasmicElementProxy;

export const PlasmicContainerPrivacyPolicy__VariantProps = new Array();

export const PlasmicContainerPrivacyPolicy__ArgProps = new Array();

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicContainerPrivacyPolicy__RenderFunc(props) {
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
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsqAyk5ZgNfB()
  });
  return (
    <div
      data-plasmic-name={"containerPrivacyPolicy"}
      data-plasmic-override={overrides.containerPrivacyPolicy}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        sty.containerPrivacyPolicy
      )}
    >
      <Stack__
        as={"div"}
        data-plasmic-name={"privacyPolicy"}
        data-plasmic-override={overrides.privacyPolicy}
        hasGap={true}
        className={classNames(projectcss.all, sty.privacyPolicy)}
      >
        <h4
          className={classNames(
            projectcss.all,
            projectcss.h4,
            projectcss.__wab_text,
            sty.h4___24Sy2
          )}
        >
          {hasVariant(globalVariants, "screen", "mobileOnly")
            ? "Privacy Policy"
            : "Privacy Policy"}
        </h4>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__dSkLz
          )}
        >
          {
            'Welcome to Halcyon Studio\'s Privacy Policy. This document outlines how we collect, use, disclose, and protect your personal information when you interact with our website and related services. By accessing or using our website located at www.halcyonstudio.com, or any other websites, pages, features, mobile applications, or technology owned or operated by Halcyon Studio (referred to as "Halcyon Studio," "the Company," "we," "us," or "our"), you agree to the practices described in this Privacy Policy.'
          }
        </div>
      </Stack__>
      <Stack__
        as={"div"}
        data-plasmic-name={"informationWeCollect"}
        data-plasmic-override={overrides.informationWeCollect}
        hasGap={true}
        className={classNames(projectcss.all, sty.informationWeCollect)}
      >
        <h4
          className={classNames(
            projectcss.all,
            projectcss.h4,
            projectcss.__wab_text,
            sty.h4__s8TOh
          )}
        >
          {hasVariant(globalVariants, "screen", "mobileOnly")
            ? "Information We Collect"
            : "Information We Collect"}
        </h4>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__qsdr8
          )}
        >
          {
            "We collect information that you voluntarily provide to us when you interact with our services. This may include:\n\nPersonal information such as your name, email address, phone number, and billing information when you register for an account or make a purchase.\nInformation you provide when you contact us for customer support or participate in surveys or promotions.\nUsage data and technical information automatically collected when you access our website, such as your IP address, browser type, device information, and cookies."
          }
        </div>
      </Stack__>
      <Stack__
        as={"div"}
        data-plasmic-name={"howWeUseInformation"}
        data-plasmic-override={overrides.howWeUseInformation}
        hasGap={true}
        className={classNames(projectcss.all, sty.howWeUseInformation)}
      >
        <h4
          className={classNames(
            projectcss.all,
            projectcss.h4,
            projectcss.__wab_text,
            sty.h4__ytiTo
          )}
        >
          {hasVariant(globalVariants, "screen", "mobileOnly")
            ? "How We Use Your Information"
            : "How We Use Your Information"}
        </h4>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__xJt0U
          )}
        >
          {
            "We use the information we collect for various purposes, including:\n\nProviding and improving our services, including customizing content and features.\nCommunicating with you, such as responding to your inquiries and sending you updates and notifications.\nProcessing transactions and fulfilling orders.\nAnalyzing trends and user interactions to optimize our website and services.\nProtecting our rights, property, and safety, as well as that of our users and the public."
          }
        </div>
      </Stack__>
      <Stack__
        as={"div"}
        data-plasmic-name={"informationSharing"}
        data-plasmic-override={overrides.informationSharing}
        hasGap={true}
        className={classNames(projectcss.all, sty.informationSharing)}
      >
        <h4
          className={classNames(
            projectcss.all,
            projectcss.h4,
            projectcss.__wab_text,
            sty.h4__kYcSl
          )}
        >
          {hasVariant(globalVariants, "screen", "mobileOnly")
            ? "Information Sharing and Disclosure"
            : "Information Sharing and Disclosure"}
        </h4>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__xAMs
          )}
        >
          {
            "We may share your personal information with third-party service providers who assist us in operating our website and providing services to you. These service providers are contractually obligated to use your information only for the purposes of providing services to us and are required to maintain the confidentiality and security of your information.\n\nWe may also disclose your information in response to legal requests or to comply with applicable laws and regulations, enforce our policies, or protect our rights, property, or safety."
          }
        </div>
      </Stack__>
      <Stack__
        as={"div"}
        data-plasmic-name={"yourChoices"}
        data-plasmic-override={overrides.yourChoices}
        hasGap={true}
        className={classNames(projectcss.all, sty.yourChoices)}
      >
        <h4
          className={classNames(
            projectcss.all,
            projectcss.h4,
            projectcss.__wab_text,
            sty.h4__olgqw
          )}
        >
          {hasVariant(globalVariants, "screen", "mobileOnly")
            ? "Your Choices"
            : "Your Choices"}
        </h4>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__h7F7I
          )}
        >
          {
            "You have the following choices regarding your personal information:\n\nYou can access, update, or delete your personal information by logging into your account settings or contacting us directly.\nYou can opt-out of receiving promotional communications from us by following the instructions provided in such communications.\nYou can adjust your browser settings to refuse cookies or alert you when cookies are being sent. However, please note that some features of our website may not function properly if cookies are disabled."
          }
        </div>
      </Stack__>
      <Stack__
        as={"div"}
        data-plasmic-name={"dataSecurity"}
        data-plasmic-override={overrides.dataSecurity}
        hasGap={true}
        className={classNames(projectcss.all, sty.dataSecurity)}
      >
        <h4
          className={classNames(
            projectcss.all,
            projectcss.h4,
            projectcss.__wab_text,
            sty.h4___28YoY
          )}
        >
          {hasVariant(globalVariants, "screen", "mobileOnly")
            ? "Data Security"
            : "Data Security"}
        </h4>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__pOlSy
          )}
        >
          {
            "We take reasonable measures to protect the security of your personal information and prevent unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security."
          }
        </div>
      </Stack__>
      <Stack__
        as={"div"}
        data-plasmic-name={"childrensPolicy"}
        data-plasmic-override={overrides.childrensPolicy}
        hasGap={true}
        className={classNames(projectcss.all, sty.childrensPolicy)}
      >
        <h4
          className={classNames(
            projectcss.all,
            projectcss.h4,
            projectcss.__wab_text,
            sty.h4__vWf0Z
          )}
        >
          {hasVariant(globalVariants, "screen", "mobileOnly")
            ? "Children's Privacy"
            : "Children's Privacy"}
        </h4>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__aZeLm
          )}
        >
          {
            "We may update this Cookie Policy from time to time. Any material changes will be reflected in the updated policy with an effective date. We encourage you to review this policy periodically for updates.\n\nThank you for reading our Cookie Policy."
          }
        </div>
      </Stack__>
      <Stack__
        as={"div"}
        data-plasmic-name={"changesToOurPrivacyPolicy"}
        data-plasmic-override={overrides.changesToOurPrivacyPolicy}
        hasGap={true}
        className={classNames(projectcss.all, sty.changesToOurPrivacyPolicy)}
      >
        <h4
          className={classNames(
            projectcss.all,
            projectcss.h4,
            projectcss.__wab_text,
            sty.h4__bfrtP
          )}
        >
          {hasVariant(globalVariants, "screen", "mobileOnly")
            ? "Changes to Our Privacy Policy"
            : "Changes to Our Privacy Policy"}
        </h4>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__t475B
          )}
        >
          {
            "We may update this Privacy Policy from time to time. Any material changes will be reflected in the updated policy with an effective date. We encourage you to review this policy periodically for updates."
          }
        </div>
      </Stack__>
      <Stack__
        as={"div"}
        data-plasmic-name={"questionsAndContactInfo"}
        data-plasmic-override={overrides.questionsAndContactInfo}
        hasGap={true}
        className={classNames(projectcss.all, sty.questionsAndContactInfo)}
      >
        <h4
          className={classNames(
            projectcss.all,
            projectcss.h4,
            projectcss.__wab_text,
            sty.h4__u3GQo
          )}
        >
          {hasVariant(globalVariants, "screen", "mobileOnly")
            ? "Questions & Contact Information"
            : "Questions & Contact Information"}
        </h4>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__kiDun
          )}
        >
          {
            "If you have any questions or concerns regarding our Privacy Policy, please contact us at admin@halcyonstudio.us\n\nThank you for reading our Privacy Policy."
          }
        </div>
      </Stack__>
    </div>
  );
}

const PlasmicDescendants = {
  containerPrivacyPolicy: [
    "containerPrivacyPolicy",
    "privacyPolicy",
    "informationWeCollect",
    "howWeUseInformation",
    "informationSharing",
    "yourChoices",
    "dataSecurity",
    "childrensPolicy",
    "changesToOurPrivacyPolicy",
    "questionsAndContactInfo"
  ],

  privacyPolicy: ["privacyPolicy"],
  informationWeCollect: ["informationWeCollect"],
  howWeUseInformation: ["howWeUseInformation"],
  informationSharing: ["informationSharing"],
  yourChoices: ["yourChoices"],
  dataSecurity: ["dataSecurity"],
  childrensPolicy: ["childrensPolicy"],
  changesToOurPrivacyPolicy: ["changesToOurPrivacyPolicy"],
  questionsAndContactInfo: ["questionsAndContactInfo"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicContainerPrivacyPolicy__ArgProps,
          internalVariantPropNames: PlasmicContainerPrivacyPolicy__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicContainerPrivacyPolicy__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "containerPrivacyPolicy") {
    func.displayName = "PlasmicContainerPrivacyPolicy";
  } else {
    func.displayName = `PlasmicContainerPrivacyPolicy.${nodeName}`;
  }
  return func;
}

export const PlasmicContainerPrivacyPolicy = Object.assign(
  // Top-level PlasmicContainerPrivacyPolicy renders the root element
  makeNodeComponent("containerPrivacyPolicy"),
  {
    // Helper components rendering sub-elements
    privacyPolicy: makeNodeComponent("privacyPolicy"),
    informationWeCollect: makeNodeComponent("informationWeCollect"),
    howWeUseInformation: makeNodeComponent("howWeUseInformation"),
    informationSharing: makeNodeComponent("informationSharing"),
    yourChoices: makeNodeComponent("yourChoices"),
    dataSecurity: makeNodeComponent("dataSecurity"),
    childrensPolicy: makeNodeComponent("childrensPolicy"),
    changesToOurPrivacyPolicy: makeNodeComponent("changesToOurPrivacyPolicy"),
    questionsAndContactInfo: makeNodeComponent("questionsAndContactInfo"),
    // Metadata about props expected for PlasmicContainerPrivacyPolicy
    internalVariantProps: PlasmicContainerPrivacyPolicy__VariantProps,
    internalArgProps: PlasmicContainerPrivacyPolicy__ArgProps
  }
);

export default PlasmicContainerPrivacyPolicy;
/* prettier-ignore-end */
