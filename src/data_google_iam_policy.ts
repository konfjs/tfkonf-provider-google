import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleIamPolicyArgsAuditConfigAuditLogConfigs {
  exempted_members?: string[];
  log_type: string;
}

export interface DataGoogleIamPolicyArgsAuditConfig {
  service: string;
  audit_log_configs: DataGoogleIamPolicyArgsAuditConfigAuditLogConfigs[];
}

export interface DataGoogleIamPolicyArgsBindingCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface DataGoogleIamPolicyArgsBinding {
  members: string[];
  role: string;
  condition?: DataGoogleIamPolicyArgsBindingCondition;
}

export interface DataGoogleIamPolicyArgs {
  audit_config?: DataGoogleIamPolicyArgsAuditConfig[];
  binding?: DataGoogleIamPolicyArgsBinding[];
}

export class data_google_iam_policy extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataGoogleIamPolicyArgs) {
    const meta = {audit_config:{isBlock:true,audit_log_configs:{isBlock:true}},binding:{isBlock:true,condition:{isBlock:true}}};
    super(terraformConfig, "data", args, meta, "google_iam_policy", resourceName);
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get policy_data(): string {
    return `data.${this.resourceType}.${this.resourceName}.policy_data`;
  }
}
