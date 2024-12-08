import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GooglePrivatecaCertificateTemplateIamMemberArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GooglePrivatecaCertificateTemplateIamMemberArgs {
  certificate_template: string;
  member: string;
  role: string;
  condition?: GooglePrivatecaCertificateTemplateIamMemberArgsCondition;
}

export class google_privateca_certificate_template_iam_member extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GooglePrivatecaCertificateTemplateIamMemberArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_privateca_certificate_template_iam_member", resourceName);
  }

  get certificate_template(): string {
    return `${this.resourceType}.${this.resourceName}.certificate_template`;
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

  get member(): string {
    return `${this.resourceType}.${this.resourceName}.member`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get role(): string {
    return `${this.resourceType}.${this.resourceName}.role`;
  }
}
