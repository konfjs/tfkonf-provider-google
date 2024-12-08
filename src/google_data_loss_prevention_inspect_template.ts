import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleDataLossPreventionInspectTemplateArgsInspectConfigCustomInfoTypesDictionaryCloudStoragePath {
  path: string;
}

export interface GoogleDataLossPreventionInspectTemplateArgsInspectConfigCustomInfoTypesDictionaryWordList {
  words: string[];
}

export interface GoogleDataLossPreventionInspectTemplateArgsInspectConfigCustomInfoTypesDictionary {
  cloud_storage_path?: GoogleDataLossPreventionInspectTemplateArgsInspectConfigCustomInfoTypesDictionaryCloudStoragePath;
  word_list?: GoogleDataLossPreventionInspectTemplateArgsInspectConfigCustomInfoTypesDictionaryWordList;
}

export interface GoogleDataLossPreventionInspectTemplateArgsInspectConfigCustomInfoTypesInfoTypeSensitivityScore {
  score: string;
}

export interface GoogleDataLossPreventionInspectTemplateArgsInspectConfigCustomInfoTypesInfoType {
  name: string;
  version?: string;
  sensitivity_score?: GoogleDataLossPreventionInspectTemplateArgsInspectConfigCustomInfoTypesInfoTypeSensitivityScore;
}

export interface GoogleDataLossPreventionInspectTemplateArgsInspectConfigCustomInfoTypesRegex {
  group_indexes?: number[];
  pattern: string;
}

export interface GoogleDataLossPreventionInspectTemplateArgsInspectConfigCustomInfoTypesSensitivityScore {
  score: string;
}

export interface GoogleDataLossPreventionInspectTemplateArgsInspectConfigCustomInfoTypesStoredType {
  name: string;
}

export interface GoogleDataLossPreventionInspectTemplateArgsInspectConfigCustomInfoTypesSurrogateType {
}

export interface GoogleDataLossPreventionInspectTemplateArgsInspectConfigCustomInfoTypes {
  exclusion_type?: string;
  likelihood?: string;
  dictionary?: GoogleDataLossPreventionInspectTemplateArgsInspectConfigCustomInfoTypesDictionary;
  info_type: GoogleDataLossPreventionInspectTemplateArgsInspectConfigCustomInfoTypesInfoType;
  regex?: GoogleDataLossPreventionInspectTemplateArgsInspectConfigCustomInfoTypesRegex;
  sensitivity_score?: GoogleDataLossPreventionInspectTemplateArgsInspectConfigCustomInfoTypesSensitivityScore;
  stored_type?: GoogleDataLossPreventionInspectTemplateArgsInspectConfigCustomInfoTypesStoredType;
  surrogate_type?: GoogleDataLossPreventionInspectTemplateArgsInspectConfigCustomInfoTypesSurrogateType;
}

export interface GoogleDataLossPreventionInspectTemplateArgsInspectConfigInfoTypesSensitivityScore {
  score: string;
}

export interface GoogleDataLossPreventionInspectTemplateArgsInspectConfigInfoTypes {
  name: string;
  version?: string;
  sensitivity_score?: GoogleDataLossPreventionInspectTemplateArgsInspectConfigInfoTypesSensitivityScore;
}

export interface GoogleDataLossPreventionInspectTemplateArgsInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeSensitivityScore {
  score: string;
}

export interface GoogleDataLossPreventionInspectTemplateArgsInspectConfigLimitsMaxFindingsPerInfoTypeInfoType {
  name: string;
  version?: string;
  sensitivity_score?: GoogleDataLossPreventionInspectTemplateArgsInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeSensitivityScore;
}

export interface GoogleDataLossPreventionInspectTemplateArgsInspectConfigLimitsMaxFindingsPerInfoType {
  max_findings: number;
  info_type?: GoogleDataLossPreventionInspectTemplateArgsInspectConfigLimitsMaxFindingsPerInfoTypeInfoType;
}

export interface GoogleDataLossPreventionInspectTemplateArgsInspectConfigLimits {
  max_findings_per_item: number;
  max_findings_per_request: number;
  max_findings_per_info_type?: GoogleDataLossPreventionInspectTemplateArgsInspectConfigLimitsMaxFindingsPerInfoType[];
}

export interface GoogleDataLossPreventionInspectTemplateArgsInspectConfigRuleSetInfoTypesSensitivityScore {
  score: string;
}

export interface GoogleDataLossPreventionInspectTemplateArgsInspectConfigRuleSetInfoTypes {
  name: string;
  version?: string;
  sensitivity_score?: GoogleDataLossPreventionInspectTemplateArgsInspectConfigRuleSetInfoTypesSensitivityScore;
}

export interface GoogleDataLossPreventionInspectTemplateArgsInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePath {
  path: string;
}

export interface GoogleDataLossPreventionInspectTemplateArgsInspectConfigRuleSetRulesExclusionRuleDictionaryWordList {
  words: string[];
}

export interface GoogleDataLossPreventionInspectTemplateArgsInspectConfigRuleSetRulesExclusionRuleDictionary {
  cloud_storage_path?: GoogleDataLossPreventionInspectTemplateArgsInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePath;
  word_list?: GoogleDataLossPreventionInspectTemplateArgsInspectConfigRuleSetRulesExclusionRuleDictionaryWordList;
}

export interface GoogleDataLossPreventionInspectTemplateArgsInspectConfigRuleSetRulesExclusionRuleExcludeByHotwordHotwordRegex {
  group_indexes?: number[];
  pattern: string;
}

export interface GoogleDataLossPreventionInspectTemplateArgsInspectConfigRuleSetRulesExclusionRuleExcludeByHotwordProximity {
  window_after?: number;
  window_before?: number;
}

export interface GoogleDataLossPreventionInspectTemplateArgsInspectConfigRuleSetRulesExclusionRuleExcludeByHotword {
  hotword_regex: GoogleDataLossPreventionInspectTemplateArgsInspectConfigRuleSetRulesExclusionRuleExcludeByHotwordHotwordRegex;
  proximity: GoogleDataLossPreventionInspectTemplateArgsInspectConfigRuleSetRulesExclusionRuleExcludeByHotwordProximity;
}

export interface GoogleDataLossPreventionInspectTemplateArgsInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesSensitivityScore {
  score: string;
}

export interface GoogleDataLossPreventionInspectTemplateArgsInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypes {
  name: string;
  version?: string;
  sensitivity_score?: GoogleDataLossPreventionInspectTemplateArgsInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesSensitivityScore;
}

export interface GoogleDataLossPreventionInspectTemplateArgsInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypes {
  info_types: GoogleDataLossPreventionInspectTemplateArgsInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypes[];
}

export interface GoogleDataLossPreventionInspectTemplateArgsInspectConfigRuleSetRulesExclusionRuleRegex {
  group_indexes?: number[];
  pattern: string;
}

export interface GoogleDataLossPreventionInspectTemplateArgsInspectConfigRuleSetRulesExclusionRule {
  matching_type: string;
  dictionary?: GoogleDataLossPreventionInspectTemplateArgsInspectConfigRuleSetRulesExclusionRuleDictionary;
  exclude_by_hotword?: GoogleDataLossPreventionInspectTemplateArgsInspectConfigRuleSetRulesExclusionRuleExcludeByHotword;
  exclude_info_types?: GoogleDataLossPreventionInspectTemplateArgsInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypes;
  regex?: GoogleDataLossPreventionInspectTemplateArgsInspectConfigRuleSetRulesExclusionRuleRegex;
}

export interface GoogleDataLossPreventionInspectTemplateArgsInspectConfigRuleSetRulesHotwordRuleHotwordRegex {
  group_indexes?: number[];
  pattern: string;
}

export interface GoogleDataLossPreventionInspectTemplateArgsInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustment {
  fixed_likelihood?: string;
  relative_likelihood?: number;
}

export interface GoogleDataLossPreventionInspectTemplateArgsInspectConfigRuleSetRulesHotwordRuleProximity {
  window_after?: number;
  window_before?: number;
}

export interface GoogleDataLossPreventionInspectTemplateArgsInspectConfigRuleSetRulesHotwordRule {
  hotword_regex: GoogleDataLossPreventionInspectTemplateArgsInspectConfigRuleSetRulesHotwordRuleHotwordRegex;
  likelihood_adjustment: GoogleDataLossPreventionInspectTemplateArgsInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustment;
  proximity: GoogleDataLossPreventionInspectTemplateArgsInspectConfigRuleSetRulesHotwordRuleProximity;
}

export interface GoogleDataLossPreventionInspectTemplateArgsInspectConfigRuleSetRules {
  exclusion_rule?: GoogleDataLossPreventionInspectTemplateArgsInspectConfigRuleSetRulesExclusionRule;
  hotword_rule?: GoogleDataLossPreventionInspectTemplateArgsInspectConfigRuleSetRulesHotwordRule;
}

export interface GoogleDataLossPreventionInspectTemplateArgsInspectConfigRuleSet {
  info_types: GoogleDataLossPreventionInspectTemplateArgsInspectConfigRuleSetInfoTypes[];
  rules: GoogleDataLossPreventionInspectTemplateArgsInspectConfigRuleSetRules[];
}

export interface GoogleDataLossPreventionInspectTemplateArgsInspectConfig {
  content_options?: string[];
  exclude_info_types?: boolean;
  include_quote?: boolean;
  min_likelihood?: string;
  custom_info_types?: GoogleDataLossPreventionInspectTemplateArgsInspectConfigCustomInfoTypes[];
  info_types?: GoogleDataLossPreventionInspectTemplateArgsInspectConfigInfoTypes[];
  limits?: GoogleDataLossPreventionInspectTemplateArgsInspectConfigLimits;
  rule_set?: GoogleDataLossPreventionInspectTemplateArgsInspectConfigRuleSet[];
}

export interface GoogleDataLossPreventionInspectTemplateArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleDataLossPreventionInspectTemplateArgs {
  description?: string;
  display_name?: string;
  parent: string;
  inspect_config?: GoogleDataLossPreventionInspectTemplateArgsInspectConfig;
  timeouts?: GoogleDataLossPreventionInspectTemplateArgsTimeouts;
}

export class google_data_loss_prevention_inspect_template extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleDataLossPreventionInspectTemplateArgs) {
    const meta = {inspect_config:{isBlock:true,custom_info_types:{isBlock:true,dictionary:{isBlock:true,cloud_storage_path:{isBlock:true},word_list:{isBlock:true}},info_type:{isBlock:true,sensitivity_score:{isBlock:true}},regex:{isBlock:true},sensitivity_score:{isBlock:true},stored_type:{isBlock:true},surrogate_type:{isBlock:true}},info_types:{isBlock:true,sensitivity_score:{isBlock:true}},limits:{isBlock:true,max_findings_per_info_type:{isBlock:true,info_type:{isBlock:true,sensitivity_score:{isBlock:true}}}},rule_set:{isBlock:true,info_types:{isBlock:true,sensitivity_score:{isBlock:true}},rules:{isBlock:true,exclusion_rule:{isBlock:true,dictionary:{isBlock:true,cloud_storage_path:{isBlock:true},word_list:{isBlock:true}},exclude_by_hotword:{isBlock:true,hotword_regex:{isBlock:true},proximity:{isBlock:true}},exclude_info_types:{isBlock:true,info_types:{isBlock:true,sensitivity_score:{isBlock:true}}},regex:{isBlock:true}},hotword_rule:{isBlock:true,hotword_regex:{isBlock:true},likelihood_adjustment:{isBlock:true},proximity:{isBlock:true}}}}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_data_loss_prevention_inspect_template", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get parent(): string {
    return `${this.resourceType}.${this.resourceName}.parent`;
  }

  get template_id(): string {
    return `${this.resourceType}.${this.resourceName}.template_id`;
  }
}
