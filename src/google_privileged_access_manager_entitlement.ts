import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GooglePrivilegedAccessManagerEntitlementArgsAdditionalNotificationTargets {
  admin_email_recipients?: string[];
  requester_email_recipients?: string[];
}

export interface GooglePrivilegedAccessManagerEntitlementArgsApprovalWorkflowManualApprovalsStepsApprovers {
  principals: string[];
}

export interface GooglePrivilegedAccessManagerEntitlementArgsApprovalWorkflowManualApprovalsSteps {
  approvals_needed?: number;
  approver_email_recipients?: string[];
  approvers: GooglePrivilegedAccessManagerEntitlementArgsApprovalWorkflowManualApprovalsStepsApprovers;
}

export interface GooglePrivilegedAccessManagerEntitlementArgsApprovalWorkflowManualApprovals {
  require_approver_justification?: boolean;
  steps: GooglePrivilegedAccessManagerEntitlementArgsApprovalWorkflowManualApprovalsSteps[];
}

export interface GooglePrivilegedAccessManagerEntitlementArgsApprovalWorkflow {
  manual_approvals: GooglePrivilegedAccessManagerEntitlementArgsApprovalWorkflowManualApprovals;
}

export interface GooglePrivilegedAccessManagerEntitlementArgsEligibleUsers {
  principals: string[];
}

export interface GooglePrivilegedAccessManagerEntitlementArgsPrivilegedAccessGcpIamAccessRoleBindings {
  condition_expression?: string;
  role: string;
}

export interface GooglePrivilegedAccessManagerEntitlementArgsPrivilegedAccessGcpIamAccess {
  resource: string;
  resource_type: string;
  role_bindings: GooglePrivilegedAccessManagerEntitlementArgsPrivilegedAccessGcpIamAccessRoleBindings[];
}

export interface GooglePrivilegedAccessManagerEntitlementArgsPrivilegedAccess {
  gcp_iam_access: GooglePrivilegedAccessManagerEntitlementArgsPrivilegedAccessGcpIamAccess;
}

export interface GooglePrivilegedAccessManagerEntitlementArgsRequesterJustificationConfigNotMandatory {
}

export interface GooglePrivilegedAccessManagerEntitlementArgsRequesterJustificationConfigUnstructured {
}

export interface GooglePrivilegedAccessManagerEntitlementArgsRequesterJustificationConfig {
  not_mandatory?: GooglePrivilegedAccessManagerEntitlementArgsRequesterJustificationConfigNotMandatory;
  unstructured?: GooglePrivilegedAccessManagerEntitlementArgsRequesterJustificationConfigUnstructured;
}

export interface GooglePrivilegedAccessManagerEntitlementArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GooglePrivilegedAccessManagerEntitlementArgs {
  entitlement_id: string;
  location: string;
  max_request_duration: string;
  parent: string;
  additional_notification_targets?: GooglePrivilegedAccessManagerEntitlementArgsAdditionalNotificationTargets;
  approval_workflow?: GooglePrivilegedAccessManagerEntitlementArgsApprovalWorkflow;
  eligible_users: GooglePrivilegedAccessManagerEntitlementArgsEligibleUsers[];
  privileged_access: GooglePrivilegedAccessManagerEntitlementArgsPrivilegedAccess;
  requester_justification_config: GooglePrivilegedAccessManagerEntitlementArgsRequesterJustificationConfig;
  timeouts?: GooglePrivilegedAccessManagerEntitlementArgsTimeouts;
}

export class google_privileged_access_manager_entitlement extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GooglePrivilegedAccessManagerEntitlementArgs) {
    const meta = {additional_notification_targets:{isBlock:true},approval_workflow:{isBlock:true,manual_approvals:{isBlock:true,steps:{isBlock:true,approvers:{isBlock:true}}}},eligible_users:{isBlock:true},privileged_access:{isBlock:true,gcp_iam_access:{isBlock:true,role_bindings:{isBlock:true}}},requester_justification_config:{isBlock:true,not_mandatory:{isBlock:true},unstructured:{isBlock:true}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_privileged_access_manager_entitlement", resourceName);
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
  }

  get entitlement_id(): string {
    return `${this.resourceType}.${this.resourceName}.entitlement_id`;
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

  get max_request_duration(): string {
    return `${this.resourceType}.${this.resourceName}.max_request_duration`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get parent(): string {
    return `${this.resourceType}.${this.resourceName}.parent`;
  }

  get state(): string {
    return `${this.resourceType}.${this.resourceName}.state`;
  }

  get update_time(): string {
    return `${this.resourceType}.${this.resourceName}.update_time`;
  }
}
