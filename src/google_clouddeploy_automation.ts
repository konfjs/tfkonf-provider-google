import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleClouddeployAutomationArgsRulesAdvanceRolloutRule {
  id: string;
  source_phases?: string[];
  wait?: string;
}

export interface GoogleClouddeployAutomationArgsRulesPromoteReleaseRule {
  destination_phase?: string;
  destination_target_id?: string;
  id: string;
  wait?: string;
}

export interface GoogleClouddeployAutomationArgsRules {
  advance_rollout_rule?: GoogleClouddeployAutomationArgsRulesAdvanceRolloutRule;
  promote_release_rule?: GoogleClouddeployAutomationArgsRulesPromoteReleaseRule;
}

export interface GoogleClouddeployAutomationArgsSelectorTargets {
  id?: string;
}

export interface GoogleClouddeployAutomationArgsSelector {
  targets: GoogleClouddeployAutomationArgsSelectorTargets[];
}

export interface GoogleClouddeployAutomationArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleClouddeployAutomationArgs {
  annotations?: { [key: string]: string };
  delivery_pipeline: string;
  description?: string;
  labels?: { [key: string]: string };
  location: string;
  name: string;
  service_account: string;
  suspended?: boolean;
  rules: GoogleClouddeployAutomationArgsRules[];
  selector: GoogleClouddeployAutomationArgsSelector;
  timeouts?: GoogleClouddeployAutomationArgsTimeouts;
}

export class google_clouddeploy_automation extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleClouddeployAutomationArgs) {
    const meta = {rules:{isBlock:true,advance_rollout_rule:{isBlock:true},promote_release_rule:{isBlock:true}},selector:{isBlock:true,targets:{isBlock:true}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_clouddeploy_automation", resourceName);
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
  }

  get delivery_pipeline(): string {
    return `${this.resourceType}.${this.resourceName}.delivery_pipeline`;
  }

  get effective_annotations(): string {
    return `${this.resourceType}.${this.resourceName}.effective_annotations`;
  }

  get effective_labels(): string {
    return `${this.resourceType}.${this.resourceName}.effective_labels`;
  }

  get etag(): string {
    return `${this.resourceType}.${this.resourceName}.etag`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get location(): string {
    return `${this.resourceType}.${this.resourceName}.location`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get service_account(): string {
    return `${this.resourceType}.${this.resourceName}.service_account`;
  }

  get terraform_labels(): string {
    return `${this.resourceType}.${this.resourceName}.terraform_labels`;
  }

  get uid(): string {
    return `${this.resourceType}.${this.resourceName}.uid`;
  }

  get update_time(): string {
    return `${this.resourceType}.${this.resourceName}.update_time`;
  }
}
