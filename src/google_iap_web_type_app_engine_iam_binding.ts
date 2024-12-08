import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleIapWebTypeAppEngineIamBindingArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleIapWebTypeAppEngineIamBindingArgs {
  app_id: string;
  members: string[];
  role: string;
  condition?: GoogleIapWebTypeAppEngineIamBindingArgsCondition;
}

export class google_iap_web_type_app_engine_iam_binding extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleIapWebTypeAppEngineIamBindingArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_iap_web_type_app_engine_iam_binding", resourceName);
  }

  get app_id(): string {
    return `${this.resourceType}.${this.resourceName}.app_id`;
  }

  get etag(): string {
    return `${this.resourceType}.${this.resourceName}.etag`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get members(): string {
    return `${this.resourceType}.${this.resourceName}.members`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get role(): string {
    return `${this.resourceType}.${this.resourceName}.role`;
  }
}
